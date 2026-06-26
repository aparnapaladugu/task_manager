import { useState } from "react";

function TaskForm({ addTasks }) {
  const initialFormState = {
    title: "",
    description: "",
    priority: "",
    duedate: "",
    completed: false,
  };
  const [taskForm, setTaskForm] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskForm.duedate || !taskForm.priority || !taskForm.title) {
      return;
    }
    addTasks({
      ...taskForm,
      id: Date.now(),
      status: "Pending",
    });
    setTaskForm(initialFormState);
  };
  const handleChange = (e) => {
    setTaskForm({
      ...taskForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h2 className="p-4 text-grey-500 text-xl">Task Form</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={taskForm.title} name="title" className="border p-2 m-1 rounded-lg"></input>
        <br />
        <input onChange={handleChange} value={taskForm.description} name="description" className="m-1 border p-2 rounded-lg"></input>
        <br />
        <select className="border p-2 rounded-lg m-1" value={taskForm.priority} onChange={handleChange} name="priority">
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <br />
        <input type="date" name="duedate" value={taskForm.duedate} onChange={handleChange} className="border p-2 m-1 rounded-lg"></input>
        <br />
        <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg m-1">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
