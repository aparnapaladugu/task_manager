import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-white shadow-md px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <div className="text-xl font-bold text-green-800">Task Manager</div>
        <div className="flex flex-wrap gap-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive ? "bg-green-600 text-white" : "text-green-800 hover:bg-green-100"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive ? "bg-green-600 text-white" : "text-green-800 hover:bg-green-100"
              }`
            }
          >
            Task List
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive ? "bg-green-600 text-white" : "text-green-800 hover:bg-green-100"
              }`
            }
          >
            Add Task
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
