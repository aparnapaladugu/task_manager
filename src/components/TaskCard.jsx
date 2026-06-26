function TaskCard({ task, key, deleteTask }) {
  return (
    <div>
      <h2>Task Card</h2>
      {task ? (
        <div className="flex items-center justify-center" key={key}>
          <div className="flex items-center justify-center flex-col">
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.priority}</div>
          </div>
          <div>
            <button className="p-5 bg-orange-600 m-5 text-white" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div>No Task</div>
      )}
    </div>
  );
}

export default TaskCard;
