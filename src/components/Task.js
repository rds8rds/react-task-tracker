import { FaTimes } from "react-icons/fa";

// to catch the prop I neeed to use ({prop}) why ?
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
        {/* another instance of variable unwraping { var } or {{unraped var}} */}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
