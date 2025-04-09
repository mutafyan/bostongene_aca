import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import Task from "../model/task.js";
import "../styles.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    setTasks([...tasks, new Task(title, description)]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, title, description) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          task.update(title, description);
        }
        return task;
      })
    );
  };

  const toggleTaskCompleted = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          task.toggleCompleted();
        }
        return task;
      })
    );
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <TaskForm onAdd={addTask} />
      <div>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskItem
                  {...task}
                  onEdit={editTask}
                  onDelete={removeTask}
                  onComplete={toggleTaskCompleted}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
