import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import Tasks from "./pages/Tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const oldTasks = localStorage.getItem("tasks");

    if (!oldTasks) return [];

    const parsedTasks = JSON.parse(oldTasks);

    return Array.isArray(parsedTasks) ? parsedTasks : [];
  });
  const addTasks = (task) => {
    setTasks((prev) => [...prev, task]);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // const editTask = (editItem,id) => {
  //   setTasks((item)=> item.id == id ? {editItem} : item)
  // };
  const deleteTask = (id) => {
    console.log(id, "iddddd");
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((item) => (item.id == id ? { ...item, completed: !item.completed } : item)));
  };
  return (
    <div className="h-full w-full bg-green-200 flex flex-col items-center jsutify-center">
      <TaskForm addTasks={addTasks} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
