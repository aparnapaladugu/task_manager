import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import TaskDetails from "./pages/TaskDetails";
import NotFound from "./pages/NotFound";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    if (!saved) return [];

    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const editTask = (updatedTask) => {
    setTasks((prev) => prev.map((item) => (item.id === updatedTask.id ? updatedTask : item)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
              status: !item.completed ? "Pending" : "Completed",
            }
          : item,
      ),
    );
  };

  const getTaskById = (id) => {
    const numericId = Number(id);
    return tasks.find((task) => task.id === numericId) || null;
  };

  return (
    <div className="min-h-screen bg-green-200">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard tasks={tasks} />} />
          <Route path="/tasks" element={<TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />} />
          <Route path="/tasks/:id" element={<TaskDetails getTaskById={getTaskById} />} />
          <Route path="/add" element={<AddTask addTask={addTask} />} />
          <Route path="/edit/:id" element={<EditTask getTaskById={getTaskById} editTask={editTask} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
