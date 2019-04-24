import React from "react";

import "./Todo.css"

class ToDoForm extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="...todo"
                />
                <button onClick={this.handleAddToDoClickEvent}>Add ToDo</button>
                <button>Clear Completed</button>
            </div>
        );
    };
};

export default ToDoForm