// Importing React and other important libraries
import "./App.css";

// Importing custom components
import TodosList from "./components/TodosList";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <TodosList />
    </TodosContextProvider>
  );
}

export default App;
