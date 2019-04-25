import React from "react";

import "./Todo.css"
import ToDoTask from "./Todo";

function ToDoList(props) {
    return (
        <div>
            {props.taskList.map(task => {
                return <ToDoTask
                        key={task.id}
                        task={task}
                        toggleCompleted={props.toggleCompleted}
                    />
            })}
        </div>
    );
}

export default ToDoList