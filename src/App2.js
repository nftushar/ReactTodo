import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const element = <FontAwesomeIcon icon={faTrash} />

const App = () => {
  const [text, setText] = useState("");

  const defaultTodos = [
    {
      text: "my first todo",
      status: true,
    },
    {
      text: "my Second todo",
      status: false,
    },
  ]

  const [todos, setTodos] = useState(defaultTodos);

  // console.log(todos);

  const addTodo = () => {
    setTodos([...todos, { text: text, status: false }]);
    setText("");
  };

 //////////////////// Check Function ////////////////////
  const handleCheck = (index) => {
    const newTodos = [todos];
    todos[index].status = !todos[index].status;
    setTodos(newTodos);
  };

 //////////////////// Delete Function ////////////////////
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div style={{ display: "flex" }}>
          <input type="checkbox" onClick={() => handleCheck(index)} checked={todo.status} />
          <h3>{todo.text}</h3>
          <button onClick={() => handleDelete(index)}>{element}</button>
        </div>
      ))}
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
};
export default App;