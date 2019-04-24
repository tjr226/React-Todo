import React from "react";

import "./Todo.css"


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: props.taskList,
        }
    };

    render() {
        console.log("3");
        console.log(this);
        console.log(this.state.taskList);
        return (
            <div>
                {this.state.taskList.map(task => {
                    return <div>{task.task}</div>
                })}
            </div>
        )
    };
};

export default ToDoList