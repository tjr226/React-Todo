import React from "react";

function ToDoTask(props) {
  let classNames = "";
  if (props.task.completed) {
    classNames += " completed";
  } else {
    classNames = "";
  };

  function updateCompletedHere() {
    props.toggleCompleted(props.task.id);
  };

  return (
    <div className={classNames} onClick={updateCompletedHere}>
      <p>{props.task.task}</p>
    </div>
  );
}

export default ToDoTask