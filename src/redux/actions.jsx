export const fetchTasks = () => async dispatch => {
    const res = await fetch('/tasks.json');
    const data = await res.json();
    dispatch({ type: 'SET_TASKS', payload: data });
  };
  
  export const addTask = title => async dispatch => {
    const newTask = { id: Date.now(), title, completed: false };
    // simulate API call
    await fetch('/tasks.json', { method: 'POST', body: JSON.stringify(newTask) });
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };
  
  export const deleteTask = id => async dispatch => {
    // simulate API call
    await fetch(`/tasks/${id}`, { method: 'DELETE' });
    dispatch({ type: 'DELETE_TASK', payload: id });
  };
  
  export const toggleTask = id => ({ type: 'TOGGLE_TASK', payload: id });
  