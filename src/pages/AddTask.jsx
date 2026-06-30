import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function AddTask({ addTask }) {
  const navigate = useNavigate();

  const handleSubmit = (task) => {
    addTask({
      ...task,
      id: Date.now(),
      status: task.completed ? "Completed" : "Pending",
      completed: task.completed || false,
    });
    navigate("/tasks");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <TaskForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddTask;
