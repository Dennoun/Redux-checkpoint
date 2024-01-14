// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleTask = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch({
      type: 'EDIT_TASK',
      payload: { id: task.id, description: editedDescription },
    });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedDescription(task.description);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={handleDescriptionChange}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;
