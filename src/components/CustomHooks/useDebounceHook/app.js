import React from "react";
import useDebounce from "./useDebounce";

export default function App(searchQuery) {
  const debouncedSearch = useDebounce(searchQuery, 300);

  return <div>app</div>;
}
