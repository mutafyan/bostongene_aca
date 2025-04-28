import { useState } from "react";
import { Row, Typography } from "antd";
import TaskBoard from "./components/TaskBoard";
import NewTaskButton from "./components/NewTaskButton";
import TaskModal from "./components/TaskModal";
import { v4 } from "uuid";
const { Title } = Typography;

function App() {
  const [tasks, setTasks] = useState([]);
  const [modalTask, setModalTask] = useState(null);

  const addTask = () => {
    const newTask = {
      id: v4(),
      title: "New Task",
      description: "",
      status: "todo",
      priority: "medium",
      dueDate: new Date().toISOString().slice(0, 10),
      assignees: [],
    };
    setTasks((prev) => [...prev, newTask]);
    setModalTask(newTask);
  };

  const saveTask = (updated) => {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    setModalTask(null);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setModalTask(null);
  };

  return (
    <div className="app-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={2} style={{ margin: "20px" }}>
          Task Manager
        </Title>
        <Row justify="center" style={{ alignSelf: "center" }}>
          <NewTaskButton onAdd={addTask} />
        </Row>
      </div>
      <TaskBoard tasks={tasks} setTasks={setTasks} onEdit={setModalTask} />
      {modalTask && (
        <TaskModal
          task={modalTask}
          onSave={saveTask}
          onDelete={deleteTask}
          onClose={() => setModalTask(null)}
        />
      )}
    </div>
  );
}

export default App;
