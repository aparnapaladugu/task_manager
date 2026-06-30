import { useState } from "react";

function TaskForm({ onSubmit, initialTask, onCancel }) {
  const initialFormState = {
    title: "",
    description: "",
    priority: "",
    duedate: "",
    completed: false,
    status: "Pending",
  };
  const [taskForm, setTaskForm] = useState(initialTask ? { ...initialTask } : initialFormState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskForm.title.trim() || !taskForm.priority || !taskForm.duedate) {
      setError("Title, priority, and due date are required.");
      return;
    }

    setError("");
    onSubmit({
      ...taskForm,
      title: taskForm.title.trim(),
    });
    setTaskForm(initialFormState);
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-200 max-w-3xl mx-auto mt-8">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">{initialTask ? "Edit Task" : "Add New Task"}</h2>
      {error && <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-red-700">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Task Name</label>
          <input
            name="title"
            value={taskForm.title}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Task Description</label>
          <textarea
            name="description"
            value={taskForm.description}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none"
            rows="3"
            placeholder="Enter details or notes"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select
              name="priority"
              value={taskForm.priority}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none"
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              name="duedate"
              value={taskForm.duedate}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button type="submit" className="rounded-lg bg-green-600 px-6 py-2 text-white transition hover:bg-green-700">
            {initialTask ? "Save Changes" : "Add Task"}
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg border border-gray-300 bg-white px-6 py-2 text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
