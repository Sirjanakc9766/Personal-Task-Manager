function TaskFilter({ statusFilter, setStatusFilter, categoryFilter, setCategoryFilter }) {
  const tabs = ["All", "Active", "Completed"];

  return (
    <div className="filter-bar">
      <div className="filter-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`filter-tab ${statusFilter === tab ? "active" : ""}`}
            onClick={() => setStatusFilter(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <select
        className="filter-select"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="All Categories">All Categories</option>
        <option value="Study">Study</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  );
}

export default TaskFilter;