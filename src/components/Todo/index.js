import React, { useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
  };

  return (
    <>
      <div>Todo</div>
      <input
        type="text"
        placeholder="Add Todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo) => (
        <>
          <div key={todo.id}>
            {todo.text}

            <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
          </div>
        </>
      ))}
    </>
  );
}
