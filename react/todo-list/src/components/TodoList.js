import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import TaskFilter from "./TaskFilter";
import Task from "../model/task.js";
import "../styles.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

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

  // filter tasks by current state
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // all
  });

  // sort by date and completion status
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1; // put not complete one before
    }

    const aDate = a.updatedAt || a.createdAt;
    const bDate = b.updatedAt || b.createdAt;
    return bDate - aDate; // then newest firsrt
  });

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <TaskForm onAdd={addTask} />
      <TaskFilter onFilterChange={setFilter} />
      <div>
        {sortedTasks.length === 0 ? (
          <p className="no-tasks">
            {tasks.length === 0
              ? "No tasks available"
              : `No ${filter === "all" ? "" : filter} tasks found`}
          </p>
        ) : (
          <ul className="task-list">
            {sortedTasks.map((task) => (
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
