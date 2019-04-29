import React from "react";

function ToDoForm(props) {
    return (

        <div>
            <form onSubmit={props.addTask}>
            <input 
                value={props.propTask.task}
                onChange={props.handleChanges}
                type="text"
                placeholder="...todo"
                name="task"
            />
            <button>Add ToDo</button>
            
            </form>
            <button>Clear Completed</button>
        </div>
    );
}


export default ToDoForm