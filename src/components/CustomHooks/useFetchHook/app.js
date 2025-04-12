import React from "react";
import useFetch from "./useFetch";

export default function App() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <>
      {loading && <>loading.....</>}
      {error && <div>Error: {error}</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}
