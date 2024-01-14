import { configureStore } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  tasks: [{
    id: 1,
    description: 'Predefined Task',
    isDone: false,
  },],
  filter: 'all', // 'all', 'done', 'notDone'
};

// Reducer
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          ),
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };
  
  const store = configureStore({
    reducer: {
      tasks: taskReducer,
    },
  });
  
  export default store;