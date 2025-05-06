const initialState = {
    tasks: [],
    loading: false,
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TASKS':
        return { ...state, tasks: action.payload };
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'DELETE_TASK':
        return { ...state, tasks: state.tasks.filter(t => t.id !== action.payload) };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  