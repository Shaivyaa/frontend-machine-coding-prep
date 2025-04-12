import { useEffect, useState } from "react";

export default function APIFetch() {
  const [data, setData] = useState([]);
  const handleAPI = () => {
    fetch(
      "https://api.spyne.ai/console/v1/enterprise/get-number-plate?enterpriseId=72bb92735"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  useEffect(() => {
    handleAPI();
  }, []);

  console.log({ data });

  return (
    <div className="App">
      <button onClick={handleAPI}>Handle API</button>{" "}
      {data.map((users) => (
        <div key={users.id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{users.name}</div>
            <div>{users.company.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
