import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          id: Date.now(),
          description: taskDescription,
          isDone: false,
        },
      });
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
