import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import TaskCard from "../components/TaskCard";

function TaskList({ tasks, deleteTask, toggleTask }) {
  const [query, setQuery] = useState("");
  const [priority, setPriority] = useState("");

  const filteredTasks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return tasks.filter((task) => {
      const matchesQuery =
        !normalizedQuery ||
        task.title.toLowerCase().includes(normalizedQuery) ||
        task.description.toLowerCase().includes(normalizedQuery);
      const matchesPriority = !priority || task.priority === priority;
      return matchesQuery && matchesPriority;
    });
  }, [tasks, query, priority]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">Task List</h1>

        <SearchBar query={query} setQuery={setQuery} priority={priority} setPriority={setPriority} />

        <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">
            Showing <strong>{filteredTasks.length}</strong> of <strong>{tasks.length}</strong> tasks.
          </p>
        </div>

        {filteredTasks.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white p-10 text-center text-gray-500 shadow-sm border border-gray-200">
            No tasks found. Try changing your search or priority filter.
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
