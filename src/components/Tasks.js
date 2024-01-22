//rafce
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  // catching the prop involves ({}) syntax;
  // task.map(fx()) takes the task array and pass every element to fx();
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
