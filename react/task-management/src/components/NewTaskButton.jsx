const NewTaskButton = ({ onAdd }) => {
  return (
    <button onClick={onAdd} style={{ marginBottom: "1rem" }}>
      + New Task
    </button>
  );
};
export default NewTaskButton;
