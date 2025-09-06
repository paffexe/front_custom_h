import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
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
          <div className="w-full h-80">
            <img
              src={data?.image}
              alt={`${data?.firstName} ${data?.lastName}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {data?.firstName} {data?.lastName}
            </h1>

            <div className="mb-6 text-center">
              <h3 className="text-lg text-gray-700">Username</h3>
              <p className="text-gray-600">{data?.username}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Contact Information
              </h2>
              <div className="space-y-2 text-center text-gray-700">
                <p>Email: {data?.email}</p>
                <p>Phone: {data?.phone}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Details
              </h2>
              <ul className="space-y-1 text-center text-gray-700">
                <li>Age: {data?.age}</li>
                <li>Gender: {data?.gender}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
