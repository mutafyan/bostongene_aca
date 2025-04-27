import Column from './Column';

const statuses = [
  { key: 'todo', label: 'To Do' },
  { key: 'doing', label: 'Doing' },
  { key: 'blocked', label: 'Blocked' },
  { key: 'done', label: 'Done' }
];

const TaskBoard = ({ tasks, setTasks, onEdit }) => {
  const onDrop = (e, newStatus) => {
    const id = +e.dataTransfer.getData('taskId');
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };
  return (
    <div className="board" style={{ display: 'flex', gap: '1rem' }}>
      {statuses.map(s => (
        <Column
          key={s.key}
          status={s}
          tasks={tasks.filter(t => t.status === s.key)}
          onDrop={onDrop}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
export default TaskBoard;
