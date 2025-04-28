import { Card, Typography } from "antd";
import TaskCard from './TaskCard';
const { Title } = Typography;

const Column = ({ status, tasks, onDrop, allowDrop, onEdit }) => {
  return (
    <Card
      size="small"
      title={<Title level={4}>{status.label}</Title>}
      style={{ background: "#ebecf0", minHeight: "400px" }}
      styles={{ body: { padding: "8px" } }}
      onDragOver={allowDrop}
      onDrop={(e) => onDrop(e, status.key)}
    >
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onEdit={onEdit} />
      ))}
    </Card>
  );
};

export default Column;
