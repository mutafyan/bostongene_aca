import { Card, Tag, Avatar } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { priorityColor } from "../constants";
import { mockUsers as users } from "../constants";

const TaskCard = ({ task, onEdit }) => {
  const dragStart = (e) => {
    return e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <Card
      size="small"
      style={{ marginBottom: 8, cursor: "pointer", position: "relative" }}
      draggable
      onDragStart={dragStart}
    >
      <EditOutlined
        onClick={() => onEdit(task)}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          fontSize: 16,
          color: "#aaa",
          transition: "opacity 0.3s",
          zIndex: 1,
        }}
      />

      <Card.Meta
        title={task.title}
        description={
          <>
            <Tag color={priorityColor[task.priority]}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </Tag>
            <div>Due: {task.dueDate}</div>

            <div style={{ marginTop: 8 }}>
              <Avatar.Group size="small" max={{ count: 3 }}>
                {task.assignees.map((id) => {
                  const user = users.find((u) => u.id === id);
                  if (!user) return null;
                  return (
                    <Avatar
                      key={user.id}
                      src={user.avatar}
                      alt={user.name}
                      title={user.name}
                    />
                  );
                })}
              </Avatar.Group>
            </div>
          </>
        }
      />
    </Card>
  );
};

export default TaskCard;
