const TaskItem = ({ task, onToggle, onDelete }) => (
    <li className="task-item">
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
  export default TaskItem;
  