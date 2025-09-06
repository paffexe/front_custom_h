import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err));
  }, [id]);

  return (
    <>
      {error && (
        <div className="text-center text-red-500">
          {error?.response?.data?.message}
        </div>
      )}

      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-80 ">
            <img
              src={data?.image}
              alt={data?.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {data?.name}
            </h1>

            <div className="mb-6 text-center">
              <h3 className="text-lg  text-gray-700">Cuisine</h3>
              <p className="text-gray-600">{data?.cuisine}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Instructions
              </h2>
              <div className="mt-2">
                {data?.instructions?.map((instruction, index) => (
                  <p key={index} className="flex ">
                    <span className=" text-white rounded-full text-sm flex items-center justify-center mr-2"></span>
                    <span className="text-gray-700">{instruction}</span>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Ingredients
              </h2>
              <ul className="space-y-1 text-center">
                {data?.ingredients?.map((ingredient, index) => (
                  <p key={index} className="text-gray-700">
                    {ingredient}
                  </p>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
