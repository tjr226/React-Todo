import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoTask from './components/TodoComponents/Todo';
import ToDoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: [{task:"test"}, {task:"test2"}],
      // taskList: [],

    };
  };

  handleAddToDoClickEvent = event => {
    console.log("AddToDo button clicked")
  }

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList taskList={ this.state.taskList } />
        <ToDoForm />
      </div>
    );
  }
}

export default App;
