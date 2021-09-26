// Importing React and other important libraries
import React from "react";

// Import css
import classes from "./Todos.module.css";

const Todos: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default Todos;
