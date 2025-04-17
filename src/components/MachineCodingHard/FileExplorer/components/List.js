import React, { useState } from "react";
import "../styles.css";
import AddFolder from "../../../../assets/svgs/add-folder-icon.svg";
import DeleteFolder from "../../../../assets/svgs/delete-icon.svg";

export default function List({ list, addNodeToList, deleteNodeFromList }) {
  const [isExpanded, setIsExpanded] = useState({});

  const handleExpandFolder = (node) => {
    setIsExpanded((prev) => ({ ...prev, [node.name]: !prev[node.name] }));
  };

  return (
    <>
      <div className="file_explorer_container">
        {list.map((node) => (
          <>
            <div key={node.id}>
              {node.isFolder && (
                <span
                  onClick={() => handleExpandFolder(node)}
                  className="expand_icon"
                >
                  {isExpanded?.[node.name] ? "-" : "+"}
                </span>
              )}
              <span>{node.name}</span>
              {node?.isFolder && (
                <>
                  <img
                    src={AddFolder}
                    alt="icon"
                    className="add_folder_icon"
                    onClick={() => addNodeToList(node.id)}
                  />
                </>
              )}
              <img
                src={DeleteFolder}
                alt="icon"
                className="delete_folder_icon"
                onClick={() => deleteNodeFromList(node.id)}
              />
              {node?.children && isExpanded?.[node.name] && (
                <List
                  list={node.children}
                  addNodeToList={addNodeToList}
                  deleteNodeFromList={deleteNodeFromList}
                />
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
