// Importing React and other important libraries
import React, { useState } from "react";

// Importing object module
import Todo from "../models/todo";

// Creating an alias for context value
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// Creating context
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

// Creating the provider component
const TodosContextProvider: React.FC = (props) => {
  // Creating todos with State
  const [todos, setTodos] = useState<Todo[]>([]);

  // Creating handler to create new task
  const addTodoHandler = (text: string) => {
    // Creating new Todo instance
    const newTodo = new Todo(text);

    // Updating the state
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };

  // Creating handler to remove task
  const removeTodoHandler = (id: string) => {
    // Using filter to Remove
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  // Creating the provider value
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
