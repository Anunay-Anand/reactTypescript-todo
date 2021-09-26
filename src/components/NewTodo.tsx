// Importing React and other important libraries
import React from "react";
import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

// Importing css and other assets
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  // Using Context to add Todo
  const ctx = useContext(TodosContext);

  // Using useRef to get input
  const todoInputRef = useRef<HTMLInputElement>(null);

  // Form submission handling function
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // getting the value
    const enteredText = todoInputRef.current!.value;

    // Check for error
    if (enteredText.trim().length === 0) {
      return;
    }

    // Sending value to parent
    ctx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todo">Todo Text</label>
      <input type="text" id="todo" name="todo" ref={todoInputRef}></input>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTodo;
