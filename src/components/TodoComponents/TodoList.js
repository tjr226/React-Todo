import React from "react";

import "./Todo.css"
import ToDoTask from "./Todo";

function ToDoList(props) {
    return (
        <div>
            {props.taskList.map(task => {
                return <ToDoTask task={task.task} />
            })}
        </div>
    );
}

export default ToDoList