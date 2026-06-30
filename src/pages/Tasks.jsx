import TaskCard from "../components/TaskCard";

function Tasks({ tasks, deleteTask, toggleTask, startEditing }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Tasks</h1>

      {tasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} startEditing={startEditing} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">No Tasks Added</div>
      )}
    </div>
  );
}

export default Tasks;
