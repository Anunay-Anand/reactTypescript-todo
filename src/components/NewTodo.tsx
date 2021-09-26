// Importing React and other important libraries
import React from "react";
import { useRef } from "react";

const NewTodo = () => {
  // Using useRef to get input
  const todoInputRef = useRef<HTMLInputElement>(null);

  // Form submission handling function
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // getting the value
    const enteredText = todoInputRef.current!.value;
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo Text</label>
      <input type="text" id="todo" name="todo" ref={todoInputRef}></input>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTodo;
