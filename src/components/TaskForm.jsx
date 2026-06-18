import { useState } from "react";

function TaskForm({ addTasks }) {
  const [taskForm, setTaskForm] = useState({
    id: "",
    title: "",
    description: "",
    priority: "",
    status: "",
    duedate: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskForm.duedate || !taskForm.priority || !taskForm.title) {
      return;
    }
    addTasks(taskForm);
    setTaskForm({
      id: "",
      title: "",
      description: "",
      priority: "",
      status: "",
      duedate: "",
    });
  };
  const handleChange = (e) => {
    console.log(e, "on change field");
    setTaskForm({
      ...taskForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="h-full w-full flex items-center justify-center">
      <h2>Task Form</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={taskForm.title} name="title"></input>
        <input onChange={handleChange} value={taskForm.description} name="description"></input>
        <select className="border p-3 rounded-lg" value={taskForm.priority} onChange={handleChange}>
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input type="date" name="date" value={taskForm.duedate} onChange={handleChange} className="border p-3 rounded-lg"></input>
        <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
