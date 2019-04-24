import React from "react";

import "./Todo.css"
import ToDoTask from "./Todo";


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: props.taskList,
        }
    };

    render() {
        console.log(this.state.taskList);
        return (
            <div>
                {this.state.taskList.map(task => {
                    return <ToDoTask task={task.task} />
                })}
            </div>
        )
    };
};

export default ToDoList