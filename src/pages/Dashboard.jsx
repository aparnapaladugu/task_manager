import { Link } from "react-router-dom";
import StatsCards from "../components/StatsCards";

function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.filter((task) => !task.completed).length;
  const latestTasks = tasks.slice().sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-3 text-gray-600">Manage your tasks, view progress, and quickly open recent items.</p>
        </div>

        <StatsCards total={total} completed={completed} pending={pending} />

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm border border-gray-200">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Recent Tasks</h2>
            <Link to="/tasks" className="inline-flex items-center rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700">
              View Full List
            </Link>
          </div>

          {latestTasks.length > 0 ? (
            <div className="mt-6 space-y-4">
              {latestTasks.map((task) => (
                <div key={task.id} className="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
                      <p className="text-sm text-gray-600">{task.description || "No description"}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${task.completed ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-800"}`}>
                      {task.completed ? "Completed" : "Pending"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-3xl bg-gray-50 p-6 text-gray-600">No recent tasks available. Add a new task to get started.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
