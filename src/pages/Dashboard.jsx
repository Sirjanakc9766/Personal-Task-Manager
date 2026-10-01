const recentTasks = [
  { id: 1, title: "Study React", category: "Study", priority: "High", status: "Completed", date: "20 Apr 2025" },
  { id: 2, title: "Finish Assignment", category: "Work", priority: "Medium", status: "Active", date: "22 Apr 2025" },
  { id: 3, title: "Gym Workout", category: "Personal", priority: "Low", status: "Active", date: "23 Apr 2025" },
  { id: 4, title: "Read a Book", category: "Personal", priority: "Medium", status: "Completed", date: "18 Apr 2025" },
  { id: 5, title: "Project Work", category: "Work", priority: "High", status: "Active", date: "25 Apr 2025" },
];

function Dashboard() {
  const total = recentTasks.length + 1; // matches "6" in mockup
  const completed = recentTasks.filter((t) => t.status === "Completed").length;
  const pending = total - completed;

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Here's a quick overview of your tasks.</p>
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-icon stat-icon-blue">🗂️</span>
          <div>
            <div className="stat-label">Total Tasks</div>
            <div className="stat-value">{total}</div>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon stat-icon-green">✅</span>
          <div>
            <div className="stat-label">Completed</div>
            <div className="stat-value">{completed}</div>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon stat-icon-amber">🕒</span>
          <div>
            <div className="stat-label">Pending</div>
            <div className="stat-value">{pending}</div>
          </div>
        </div>
      </div>

      <div className="task-list-card">
        <div className="list-card-header">
          <h2>Recent Tasks</h2>
          <a href="/tasks" className="view-all-link">View All →</a>
        </div>

        <ul>
          {recentTasks.map((task) => (
            <li key={task.id} className="task-row">
              <span className="task-title">{task.title}</span>
              <span className={`badge badge-${task.category.toLowerCase()}`}>{task.category}</span>
              <span className={`badge badge-${task.priority.toLowerCase()}`}>{task.priority}</span>
              <span className={`badge badge-${task.status.toLowerCase()}`}>{task.status}</span>
              <span className="task-date">{task.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dashboard;