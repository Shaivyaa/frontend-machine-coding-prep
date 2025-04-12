import axios from "axios";
import React, { useEffect, useState } from "react";

export default function APIAxios() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState("kscbvd");

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <>
      <div>API Call</div>
      {data.map((post) => (
        <>
          <div>Title :{post.title}</div>
          <div>Post: {post.body}</div>
        </>
      ))}
    </>
  );
}
