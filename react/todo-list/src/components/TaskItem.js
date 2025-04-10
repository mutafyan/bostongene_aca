import { useState } from "react";
import "../styles.css";
import TaskForm from "./TaskForm";

const TaskItem = ({
  title,
  description,
  id,
  completed,
  createdAt,
  updatedAt,
  onEdit,
  onDelete,
  onComplete,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleEdit = (editedTitle, editedDescription) => {
    if (editedTitle.trim() === "") {
      alert("Title cannot be empty");
      return;
    }
    onEdit(id, editedTitle, editedDescription);
    toggleEditing();
  };

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleString();
  };

  const displayDate = updatedAt ? formatDate(updatedAt) : formatDate(createdAt);
  const dateLabel = updatedAt ? "Updated" : "Created";

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          onComplete(id);
        }}
        className="task-checkbox"
      />

      {isEditing ? (
        <div className="task-content">
          <TaskForm
            onSave={handleEdit}
            isEdit
            onCancel={toggleEditing}
            initialTitle={title}
            initialDesc={description}
          />
        </div>
      ) : (
        <div className="task-content">
          <h3 className={`task-title${completed ? "-done" : ""}`}>{title}</h3>
          {description && (
            <p className={`task-description${completed ? "-done" : ""}`}>
              {description}
            </p>
          )}
          <div className="task-date">
            {dateLabel}: {displayDate}
          </div>
          <div className="task-actions">
            {!completed && (
              <button onClick={toggleEditing} className="btn edit-btn">
                Edit
              </button>
            )}
            <button onClick={() => onDelete(id)} className="btn delete-btn">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
