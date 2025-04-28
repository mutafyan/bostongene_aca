import { Row, Col } from "antd";
import Column from "./Column";
import { statuses } from "../constants";

const TaskBoard = ({ tasks, setTasks, onEdit }) => {
  const onDrop = (e, newStatus) => {
    const id = e.dataTransfer.getData("taskId");
    setTasks((prev) =>
      prev.map((task) => 
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <Row gutter={16} wrap={false} style={{ overflowX: "auto" }}>
      {statuses.map((s) => (
        <Col
          key={s.value}
          style={{ width: "25%", minWidth: "fit-content", height: "80%" }}
        >
          <Column
            status={s}
            tasks={tasks.filter((t) => t.status === s.value)}
            onDrop={onDrop}
            allowDrop={allowDrop}
            onEdit={onEdit}
          />
        </Col>
      ))}
    </Row>
  );
};
export default TaskBoard;
