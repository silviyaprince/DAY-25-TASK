import "./App.css";
import { Addtodo } from "./Addtodo";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Select } from "@mui/base/Select";
import { Option } from "@mui/base/Option";
import {Todo} from "./Todo";

export const data = [
  {
    name: "Office task-1",
    description: "need to submit the auditing file by next week",
  },
  {
    name: "Office task-2",
    description:
      "need to submit the employee attendance file by 23rd of august",
  },
  {
    name: "Office task-3",
    description: "must check the team coordination of accounts",
  },
];

function App() {
  const [todolist, setTodolist] = useState(data);
  const updateTodo = (updatedTodo) => {
    const updatedTodos = todolist.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodolist(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todolist.filter((todo) => todo.id !== id);
    setTodolist(updatedTodos);
  };
  return (
    <div className="App">
      <h2>My todo</h2>
      <Addtodo todolist={todolist} setTodolist={setTodolist}/>
      <br />
      <div className="container">
        <h2 className="h2class">My todos</h2>
        <h2 className="h2class">
          Status filter :{" "}
          <select className="dropdown1" id="todo1" name="status">
            <option value="All">All</option>
            <option value="Not completed">Not completed</option>
            <option value="Completed">Completed</option>
          </select>
        </h2>
      </div>
      <div className="t-container">
      {todolist.map((val,index)=>(<Todo todo={val} key={index} id={index} deleteTodo={deleteTodo} updateTodo={updateTodo}
    />
     ) )}
      </div>
    </div>
  );
}

export default App;
