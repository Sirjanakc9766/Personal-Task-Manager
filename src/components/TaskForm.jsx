import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask({
      id: Date.now(),
      title: title.trim(),
      category,
      priority,
      status: "Active",
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    });

    setTitle("");
    setPriority("Medium");
  };

  return (
    <form
      className="task-form-card"
      onSubmit={handleSubmit}
    >
      <div className="task-form-grid">
        <div className="form-field">
          <label htmlFor="title">Task title</label>

          <input
            id="title"
            type="text"
            placeholder="e.g. Learn JavaScript"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option>Study</option>
            <option>Work</option>
            <option>Personal</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="priority">Priority</label>

          <select
            id="priority"
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          + Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;