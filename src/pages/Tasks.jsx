import TaskCard from "../components/TaskCard";

function Tasks({ tasks, deleteTask }) {
  console.log(tasks, "tasks");

  return (
    <div className="h-full w-full bg-green-200 flex flex-col items-center justify-center">
      <h2>Tasks</h2>

      {tasks.length > 0 ? tasks.map((task) => <TaskCard task={task} key={task.id} deleteTask={deleteTask} />) : <div>No Tasks Added</div>}
    </div>
  );
}

export default Tasks;
