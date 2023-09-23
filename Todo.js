import Button from "@mui/material/Button";
import { useState } from "react";

export function Todo({ todo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [editedStatus, setEditedStatus] = useState(todo.status);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Create an updatedTodo object with the edited values
    const updatedTodo = {
      ...todo,
      name: editedName,
      description: editedDescription,
      status: editedStatus,
    };

    // Call the updateTodo function to update the todo in the parent component
    updateTodo(updatedTodo);

    // Exit edit mode
    setIsEditing(false);
  };

  return (
    <div className="todo-container">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <select
            value={editedStatus}
            onChange={(e) => setEditedStatus(e.target.value)}>
            <option value="Not completed">Not completed</option>
            <option value="Completed">Completed</option>
          </select>
          <Button color="success" variant="contained" onClick={handleSaveClick}>
            Save
          </Button>
        </div>
      ) : (
        <div>
          <p className="todo-name">Name: {todo.name}</p>
          <p className="todo-desc">Description: {todo.description}</p>
          <div className="status-div">
            <p className="todo-status">
              Status :{" "}
              <select className="dropdown" id="todo1" name="status">
                <option value="All">All</option>
                <option value="Not completed">Not completed</option>
                <option value="Completed">Completed</option>
              </select>{" "}
            </p>
          </div>
          <br />
          <br />
          <br />
          <div className="button-div">
            <Button
              color="success"
              variant="contained"
              onClick={handleEditClick}>
              Edit
            </Button>
            <Button
              color="warning"
              variant="contained"
              onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
