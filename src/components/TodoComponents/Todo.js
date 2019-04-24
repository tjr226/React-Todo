import React from "react";

import "./Todo.css"

class ToDoTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: props.task,
            id: Date.now(),
            completed: false,
        };
    };

    render() {
        return (
            <p>{this.state.task}</p>
        )
    };
};

export default ToDoTask