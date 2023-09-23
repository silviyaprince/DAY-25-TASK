import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { data } from "./App";
import {Todo} from "./Todo";

export function Addtodo({todolist,setTodolist}) {
 
  const [name, setname] = useState(" ");
  const [description, setdescription] = useState(" ");

  return (
    <div>
      <div className="add-todo-form">
        <TextField
          className="ss"
          label="Todo Name"
          variant="standard"
          margin="dense"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", height: "6ch" },
          }}
          onChange={(event) => setname(event.target.value)}
          value={name}
        />

        <TextField
          label="Description"
          variant="standard"
          margin="dense"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", height: "6ch" },
          }}
          onChange={(event) => setdescription(event.target.value)}
          value={description}
        />
        <Button
          color="success"
          sx={{ marginTop: "30px" }}
          variant="contained"
          onClick={() => {
            const newtodo = {
              id: Date.now(),
              name,
              description,
            };
            setTodolist([...todolist, newtodo]);
          }}>
          ADD TODO
        </Button>
      </div>
      
    </div>
  );
}
