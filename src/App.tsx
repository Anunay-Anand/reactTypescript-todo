// Importing React and other important libraries
import React from "react";
import "./App.css";

// Importing custom components
import TodosList from "./components/TodosList";

// Importing models for props
import Todo from "./models/todo";

function App() {
  // Creating dummy values
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  return (
    <div>
      <TodosList items={todos} />
    </div>
  );
}

export default App;
