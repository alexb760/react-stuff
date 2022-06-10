import { useState } from "react";
import RenderTodoList from "./components/rendertask/todoList";
import NewTodo from "./components/todotask/NewTodo";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const dataTodoListHandler = (dataInput) => {
    setTodoList((prevList) => {
      return [dataInput, ...prevList];
    });
  };

  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <NewTodo onSaveDataList={dataTodoListHandler} />
      <RenderTodoList todoListItems={todoList} />
    </div>
  );
}

export default App;
