import { useState } from 'react';
import '../styles.css';

const TaskForm = ({ onAdd, onSave, isEdit = false, onCancel, initialTitle, initialDesc }) => {
  const [title, setTitle] = useState(initialTitle || '');
  const [description, setDescription] = useState(initialDesc || '');
  
  const handleSave = (isEdit) => {
    if (title.trim() === '') {
      alert('Title cannot be empty');
      return;
    }
    isEdit ? onSave(title, description) : onAdd(title, description);
    setTitle(initialTitle || '');
    setDescription(initialDesc || '');
  };
  
  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="form-textarea"
      />
      {isEdit 
        ? <div className="task-actions">
            <button 
                onClick={( ) => handleSave(isEdit)} className="btn add-btn">
                Save</button> 
            <button onClick={onCancel} className="btn cancel-btn">
                Cancel
            </button>
        </div>
        : <button
            onClick={() => handleSave(isEdit)} className="btn add-btn">
            Add Task
        </button>
        }
    </div>
  );
};

export default TaskForm;
