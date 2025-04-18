import React from "react";
import checkboxData from "../data.json";

export default function CheckBoxes({ data, checked, setChecked }) {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };
      updateChildren(node);

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const allChildrenChecked = node.children.every((child) => {
          return verifyChecked(child);
        });
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      checkboxData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };

  console.log({ checked });

  return (
    <>
      <div>
        {data.map((node) => (
          <>
            <div className="parent" key={node.id}>
              <input
                type="checkbox"
                checked={checked[node.id] || false}
                onChange={(e) => handleChange(e.target.checked, node)}
              />
              <span>{node.name}</span>
              {node.children && (
                <CheckBoxes
                  data={node?.children}
                  checked={checked}
                  setChecked={setChecked}
                />
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
