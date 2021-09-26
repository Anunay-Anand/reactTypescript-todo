// Importing React and other important libraries
import React, { useContext } from "react";

// Importing custom components
import Todos from "./Todos";
import { TodosContext } from "../store/todos-context";

// Importing css
import classes from "./TodoList.module.css";

const TodosList: React.FC = () => {
  // Using context
  const ctx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <Todos
          key={item.id}
          text={item.text}
          onRemoveTodo={ctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default TodosList;
