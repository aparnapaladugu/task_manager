import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState(() => {
    const oldTasks = localStorage.getItem("tasks");
    return oldTasks ? JSON.parse(oldTasks) : [];
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
  // const deleteTask = (id) =>{
  //   setTasks(item => item.id != id)
  // }
  return (
    <div class="h-full w-full bg-green-300 flex items-center jsutify-center">
      <h1>expense tracker</h1>
      <TaskForm addTasks={addTasks} />
    </div>
  );
}

export default App;
