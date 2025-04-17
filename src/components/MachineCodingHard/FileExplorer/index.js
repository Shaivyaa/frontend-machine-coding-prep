// Nested file/folder structure
// Add/Remove file/folder
// Expand collapse folders only
// use recursion for nested structure

import React, { useState } from "react";
import "./styles.css";
import json from "./data.json";
import List from "./components/List";

export default function FileExplorer() {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter Name");
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(),
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }

        return node;
      });
    };
    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };
    setData((prev) => updateTree(prev));
  };

  return (
    <>
      <div className="file_explorer_wrapper">
        {" "}
        <div style={{ fontSize: "40px", fontWeight: "bold", padding: "15px" }}>
          File Explorer
        </div>
        <List
          list={data}
          addNodeToList={addNodeToList}
          deleteNodeFromList={deleteNodeFromList}
        />
      </div>
    </>
  );
}
