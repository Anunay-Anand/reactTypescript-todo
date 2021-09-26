import React from "react";
import "./App.css";
import Todos from "./components/todos";

function App() {
  return (
    <div>
      <Todos items={["learn React", "Learn TypeScript"]} />
    </div>
  );
}

export default App;
