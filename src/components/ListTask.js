import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";

const ListTask = () => {

  const tasks = useSelector((state) => {
    if (!state.tasks.tasks) {
      // Ensure tasks is an array; handle cases where it might be null or undefined
      return [];
    }

    if (state.tasks.filter === "done") {
      return state.tasks.tasks.filter((task) => task.isDone);
    } else if (state.tasks.filter === "notDone") {
      return state.tasks.tasks.filter((task) => !task.isDone);
    } else {
      return state.tasks.tasks;
    }
  });
  const dispatch = useDispatch();
  console.log(tasks)
  return (
    <div>
      <label>
        Filter:
        <select
          onChange={(e) =>
            dispatch({ type: "SET_FILTER", payload: e.target.value })
          }
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="notDone">Not Done</option>
        </select>
      </label>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
          
        ))}
        
      </ul>
    </div>
  );
};

export default ListTask;
