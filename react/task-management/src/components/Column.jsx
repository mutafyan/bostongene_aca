import TaskCard from './TaskCard';

const Column = ({ status, tasks, onDrop, onEdit }) => {
  const allowDrop = e => e.preventDefault();
  return (
    <div
      className="column"
      onDragOver={allowDrop}
      onDrop={e => onDrop(e, status.key)}
      style={{ flex: 1, background: '#ebecf0', padding: '0.5rem', borderRadius: '4px' }}
    >
      <h2>{status.label}</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default Column;