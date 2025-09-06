import React from "react";

const HomeView = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <h3 className="text-2xl font-bold mb-6 text-center">Users</h3>
      <div className="grid grid-cols-2 gap-6">
        {user?.map((item) => (
          <div key={item.id} className="p-6 border border-gray-200 rounded-lg ">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {item.name}
            </h2>
            <p className="text-gray-600">{item.email}</p>
            <p className="text-gray-500">@{item.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
