import axios from "axios";
import React, { useEffect, useState } from "react";
import PostView from "./PostView";

const Post = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <PostView post={posts} />
    </div>
  );
};

export default Post;
