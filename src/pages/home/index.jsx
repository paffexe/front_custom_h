import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeView from "./HomeView";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <HomeView user={users} />
    </div>
  );
};

export default Home;
