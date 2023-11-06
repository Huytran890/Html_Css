export const Task = (props) => {
  return (
    <li
      className="task"
      style={{
        backgroundColor: props.completed ? "green" : "white",
        color: props.completed ? "white" : "black",
      }}
    >
      <p>{props.taskName}</p>
      <button onClick={() => props.completeTask(props.id)}> Complete </button>
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
    </li>
  );
};
