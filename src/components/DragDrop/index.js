import React, { useState } from "react";

const DragDrop = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [draggedItem, setDraggedItem] = useState(null);

  const onDragStart = (index) => setDraggedItem(index);

  const onDrop = (index) => {
    const updatedItems = [...items];
    const [removed] = updatedItems.splice(draggedItem, 1);
    updatedItems.splice(index, 0, removed);
    setItems(updatedItems);
    setDraggedItem(null);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => onDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => onDrop(index)}
          className="border p-2 my-2 bg-gray-200 cursor-move"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DragDrop;
