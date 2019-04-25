import React from "react";

function ToDoForm(props) {
    return (

        <div className="form-div">
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

            <button onClick={props.removeCompleted}>Clear Completed</button>
        </div>
    );
}


export default ToDoForm