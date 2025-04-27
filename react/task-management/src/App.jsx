import { useState } from "react";
import TaskBoard from "./components/TaskBoard";
import NewTaskButton from "./components/NewTaskButton";

function App() {
  const [tasks, setTasks] = useState([]);
  const [modalTask, setModalTask] = useState(null);

  // creating a new task with default values
  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: "New Task",
      description: "",
      status: "todo",
      priority: "medium",
      dueDate: new Date().toISOString().slice(0, 10),
      assignee: "",
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
      <h1>Task Manager</h1>
      <NewTaskButton onAdd={addTask} />
      <TaskBoard tasks={tasks} setTasks={setTasks} onEdit={setModalTask} />
      {modalTask && (
        <div>modal</div> // must be modal
      )}
    </div>
  );
}

export default App;
