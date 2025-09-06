import React from "react";

const PostView = ({ post }) => {
  return (
    <div className="max-w-3xl mx-auto my-10">
      <h3 className="text-2xl font-bold mb-6 text-center">Post list</h3>
      <div className="space-y-6">
        {post?.map((item) => (
          <div key={item.id} className="p-6 border border-gray-200 rounded-lg ">
            <h3 className="text-xl  mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostView;
