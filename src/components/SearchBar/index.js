import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Mango", "Strawberry", "Pineapple"];

  return (
    <>
      <div>
        <div>Search Bar</div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full"
        />

        <ul>
          {items
            .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
            .map((item) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
