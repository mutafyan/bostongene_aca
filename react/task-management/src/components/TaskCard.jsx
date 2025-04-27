
const TaskCard = ({ task, onEdit }) => {
  const dragStart = e => e.dataTransfer.setData('taskId', task.id);
  return (
    <div
      className="task-card"
      draggable
      onDragStart={dragStart}
      onClick={() => onEdit(task)}
      style={{
        background: '#fff', padding: '0.5rem', margin: '0.5rem 0',
        borderRadius: '4px', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
      }}
    >
      <strong>{task.title}</strong>
      <div>Priority: {task.priority}</div>
      <div>Due: {task.dueDate}</div>
      <div>Assignee: {task.assignee}</div>
    </div>
  );
}

export default TaskCard;