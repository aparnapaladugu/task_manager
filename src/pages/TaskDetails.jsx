import { Link, useParams } from "react-router-dom";

function TaskDetails({ getTaskById }) {
  const { id } = useParams();
  const task = getTaskById(id);

  if (!task) {
    return (
      <div className="min-h-screen bg-gray-100 px-4 py-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm border border-gray-200 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Task not found</h2>
          <p className="mt-3 text-gray-600">The requested task could not be located.</p>
          <Link to="/tasks" className="mt-6 inline-flex rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700">
            Back to Tasks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm border border-gray-200">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{task.title}</h1>
            <p className="mt-2 text-gray-600">{task.description || "No description provided."}</p>
          </div>
          <Link to="/tasks" className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700">
            Back to Tasks
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-gray-50 p-6">
            <div className="text-sm font-medium text-gray-500">Priority</div>
            <div className="mt-2 text-xl font-semibold text-gray-900">{task.priority || "None"}</div>
          </div>
          <div className="rounded-3xl bg-gray-50 p-6">
            <div className="text-sm font-medium text-gray-500">Due Date</div>
            <div className="mt-2 text-xl font-semibold text-gray-900">{task.duedate || "Unscheduled"}</div>
          </div>
          <div className="rounded-3xl bg-gray-50 p-6">
            <div className="text-sm font-medium text-gray-500">Status</div>
            <div className="mt-2 text-xl font-semibold text-gray-900">{task.completed ? "Completed" : "Pending"}</div>
          </div>
          <div className="rounded-3xl bg-gray-50 p-6">
            <div className="text-sm font-medium text-gray-500">Created</div>
            <div className="mt-2 text-xl font-semibold text-gray-900">{new Date(task.id).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
