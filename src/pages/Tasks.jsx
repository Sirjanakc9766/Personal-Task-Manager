import { useState } from "react";

import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import TaskList from "../components/TaskList";

const initialTasks = [
  {
    id: 1,
    title: "Study React",
    category: "Study",
    priority: "High",
    status: "Completed",
    date: "20 Apr 2025",
  },
  {
    id: 2,
    title: "Finish Assignment",
    category: "Work",
    priority: "Medium",
    status: "Active",
    date: "22 Apr 2025",
  },
  {
    id: 3,
    title: "Gym Workout",
    category: "Personal",
    priority: "Low",
    status: "Active",
    date: "23 Apr 2025",
  },
  {
    id: 4,
    title: "Read a Book",
    category: "Personal",
    priority: "Medium",
    status: "Completed",
    date: "18 Apr 2025",
  },
  {
    id: 5,
    title: "Project Work",
    category: "Work",
    priority: "High",
    status: "Active",
    date: "25 Apr 2025",
  },
  {
    id: 6,
    title: "Learn JavaScript",
    category: "Study",
    priority: "Medium",
    status: "Active",
    date: "28 Apr 2025",
  },
];

function Tasks() {

  const [tasks, setTasks] = useState(initialTasks);

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [categoryFilter, setCategoryFilter] =
    useState("All Categories");


  // Add task
  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      task
    ]);
  };


  // Delete task
  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter(
        (task) => task.id !== id
      )
    );
  };


  // Complete / Active
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed"
                  ? "Active"
                  : "Completed",
            }
          : task
      )
    );
  };


  // Edit task
  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              title: newTitle,
            }
          : task
      )
    );
  };


  // Filter
  const filteredTasks = tasks.filter(
    (task) => {

      const matchesStatus =
        statusFilter === "All" ||
        task.status === statusFilter;

      const matchesCategory =
        categoryFilter === "All Categories" ||
        task.category === categoryFilter;

      return (
        matchesStatus &&
        matchesCategory
      );
    }
  );


  return (
    <>

      <div className="page-header">

        <div>

          <h1>
            My Tasks
          </h1>

          <p>
            Manage your tasks and stay productive.
          </p>

        </div>

      </div>


      {/* ADD TASK FORM */}
      <TaskForm
        onAddTask={addTask}
      />


      {/* FILTER */}
      <TaskFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />


      {/* TASK LIST */}
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />

    </>
  );
}

export default Tasks;