// Importing React and other important libraries
import { useState } from "react";
import "./App.css";

// Importing custom components
import TodosList from "./components/TodosList";
import NewTodo from "./components/NewTodo";

// Importing models for props
import Todo from "./models/todo";

function App() {
  // Creating dummy values
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  // Creating handler to create new task
  const addTodoHandler = (text: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodosList items={todos} />
    </div>
  );
}

export default App;
