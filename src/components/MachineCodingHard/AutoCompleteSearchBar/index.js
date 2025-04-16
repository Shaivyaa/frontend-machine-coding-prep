import React, { useEffect, useState } from "react";
import "./styles.css";

export default function AutoCompleteSearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCached] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const fetchData = async () => {
    if (cache[input]) {
      console.log("cached", input);
      setResults(cache[input]);
      return;
    }

    console.log("API", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
    setCached((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev - 1) % results.length);
    } else if (e.key === "Enter") {
      setInput(results[selectedIndex].name);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchData(), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
      <div className="searchbar_container">
        <div style={{ fontSize: "40px", fontWeight: "bold", padding: "15px" }}>
          AutoComplete Search Bar
        </div>
        <div className="search_input_container">
          <input
            value={input}
            placeholder="Search something...."
            className="search_input"
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowResult(true)}
            onBlur={() => setShowResult(false)}
            onKeyDown={handleKeyDown}
          />
        </div>
        {showResult && (
          <div className="results_container">
            {results.map((result, index) => (
              <>
                <div
                  className={`results ${
                    index === selectedIndex ? "selected" : ""
                  }`}
                  key={result.id}
                >
                  {result.name}
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
