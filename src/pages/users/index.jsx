import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => setData(res.data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Users
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {data?.users?.map((user) => (
          <div
            key={user.id}
            onClick={() => navigate(`/user/${user.id}`)}
            className="bg-white rounded-lg overflow-hidden "
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg text-gray-800 text-center">
                {user.firstName} {user.lastName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
