import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-56">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Log in to our site
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 "
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 "
          />

          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg">
            Log In
          </button>

          <div className="text-center">
            <span className="text-blue-600 text-sm">Forgot password?</span>
          </div>

          <div className="border-b border-gray-300 my-4"></div>

          <div className="text-center">
            <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg">
              Create new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
