import React from "react";

function ToDoTask(props) {
    return (
      <p>{props.task}</p>  
    );
}

// class ToDoTask extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             task: props.task,
//             id: Date.now(),
//             completed: false,
//         };
//     };

//     render() {
//         return (
//             <p>{this.state.task}</p>
//         )
//     };
// };

export default ToDoTask