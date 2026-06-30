import { Link } from "react-router-dom";

function TaskCard({ task, deleteTask, toggleTask }) {
  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-start gap-4">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold text-gray-800 truncate">{task.title}</h2>
          <p className="text-gray-600 mt-2 line-clamp-3">{task.description || "No description provided"}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          task.priority === "high"
            ? "bg-red-100 text-red-700"
            : task.priority === "medium"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-green-100 text-green-700"
        }`}>{task.priority ? task.priority.toUpperCase() : "NONE"}</span>
      </div>

      <div className="mt-5 space-y-2">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Due Date</span>
          <span className="text-gray-600">{task.duedate || "Unscheduled"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Status</span>
          <span className={`font-semibold ${task.completed ? "text-green-600" : "text-orange-500"}`}>
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6 sm:flex-row">
        <button
          type="button"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Mark Pending" : "Mark Complete"}
        </button>

        <Link
          to={`/tasks/${task.id}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center transition"
        >
          View
        </Link>

        <Link
          to={`/edit/${task.id}`}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-center transition"
        >
          Edit
        </Link>

        <button
          type="button"
          onClick={() => deleteTask(task.id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
