import { useState } from "react";

const TaskModal = ({ task, onSave, onDelete, onClose }) => {
  const [edit, setEdit] = useState({ ...task });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "1rem",
          borderRadius: "4px",
          width: "300px",
        }}
      >
        <h3>Edit Task</h3>
        <input
          name="title"
          value={edit.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="description"
          value={edit.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <select name="status" value={edit.status} onChange={handleChange}>
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="blocked">Blocked</option>
          <option value="done">Done</option>
        </select>
        <select name="priority" value={edit.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="date"
          name="dueDate"
          value={edit.dueDate}
          onChange={handleChange}
        />
        <input
          name="assignee"
          value={edit.assignee}
          onChange={handleChange}
          placeholder="Assignee"
        />
        <div
          style={{
            marginTop: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button onClick={() => onSave(edit)}>Save</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal; 
