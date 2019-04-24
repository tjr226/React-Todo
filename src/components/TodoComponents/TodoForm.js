import React from "react";

function ToDoForm(props) {
    return (

        <div>
            <input
                type="text"
                placeholder="...todo"
            />
            <button>Add ToDo</button>
            <button>Clear Completed</button>
        </div>
    );
}


export default ToDoForm