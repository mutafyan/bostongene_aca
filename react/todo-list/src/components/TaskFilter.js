import { useState } from "react";

const TaskFilter = ({ onFilterChange }) => {
  const [filterState, setFilterState] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilterState(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="filter-container">
      <span className="filter-label">Filter: </span>
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filterState === "all" ? "active" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filterState === "active" ? "active" : ""}`}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`filter-btn ${
            filterState === "completed" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;
