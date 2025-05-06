import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, deleteTask, toggleTask } from './redux/actions';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch])

  const handleAdd = () => {
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <div className="app-container">
      <h1>Task Manager List</h1>
      <div className='input-container'>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder='Enter Tasl...' />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <TaskList tasks={tasks} onToggle={id=>dispatch(toggleTask(id))} onDelete={id=>dispatch(deleteTask(id))} />
    </div>
  );
}

export default App;
