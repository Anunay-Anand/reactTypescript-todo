// Importing React and other important libraries
import React from "react";

const Todo: React.FC<{ id: string; text: string }> = (props) => {
  return <li key={props.id}>{props.text}</li>;
};

export default Todo;
