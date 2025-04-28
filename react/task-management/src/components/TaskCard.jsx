import { Card, Tag, Avatar } from 'antd';

const priorityColor = { low: 'blue', medium: 'green', high: 'red' };

const TaskCard = ({ task, onEdit }) => {
  const dragStart = e => e.dataTransfer.setData('taskId', task.id);
  return (
    <Card
      size="small"
      style={{ marginBottom: 8, cursor: 'pointer' }}
      draggable
      onDragStart={dragStart}
      onClick={() => onEdit(task)}
    >
      <Card.Meta
        avatar={<Avatar>{task.assignee ? task.assignee.charAt(0).toUpperCase() : '?'}</Avatar>}
        title={task.title}
        description={
          <>  
            <Tag color={priorityColor[task.priority]}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </Tag>
            <div>Due: {task.dueDate}</div>
          </>
        }
      />
    </Card>
  );
}

export default TaskCard;