// Importing React and other important libraries
import React from "react";

// Importing custom components
import Todos from "./Todos";

// Importing Model for props
import Todo from "../models/todo";

const TodosList: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Todos key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default TodosList;
