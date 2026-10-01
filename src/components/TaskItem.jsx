import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(task.title);

  const categoryClass = `badge badge-${task.category.toLowerCase()}`;
  const priorityClass = `badge badge-${task.priority.toLowerCase()}`;
  const statusClass = `badge badge-${task.status.toLowerCase()}`;

  const saveEdit = () => {
    if (draftTitle.trim()) {
      onEdit(task.id, draftTitle.trim());
    }
    setIsEditing(false);
  };

  return (
    <li className="task-row">
      <input
        type="checkbox"
        checked={task.status === "Completed"}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <input
          className="edit-input"
          value={draftTitle}
          autoFocus
          onChange={(e) => setDraftTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
        />
      ) : (
        <span className={`task-title ${task.status === "Completed" ? "done" : ""}`}>
          {task.title}
        </span>
      )}

      <span className={categoryClass}>{task.category}</span>
      <span className={priorityClass}>{task.priority}</span>
      <span className={statusClass}>{task.status}</span>
      <span className="task-date">{task.date}</span>

      <div className="task-actions">
        {isEditing ? (
          <button className="icon-btn edit" onClick={saveEdit}>
            Save
          </button>
        ) : (
          <button className="icon-btn edit" onClick={() => setIsEditing(true)}>
            ✏️ Edit
          </button>
        )}
        <button className="icon-btn delete" onClick={() => onDelete(task.id)}>
          🗑️
        </button>
      </div>
    </li>
  );
}

export default TaskItem;