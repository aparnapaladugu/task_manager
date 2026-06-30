import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function EditTask({ getTaskById, editTask }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const found = getTaskById(id);
    setTask(found);
  }, [id, getTaskById]);

  if (!task) {
    return (
      <div className="min-h-screen bg-gray-100 px-4 py-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm border border-gray-200 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Task not found</h2>
          <p className="mt-3 text-gray-600">This task does not exist or has already been deleted.</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (updatedTask) => {
    editTask(updatedTask);
    navigate("/tasks");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <TaskForm onSubmit={handleSubmit} initialTask={task} onCancel={() => navigate("/tasks")} />
      </div>
    </div>
  );
}

export default EditTask;
