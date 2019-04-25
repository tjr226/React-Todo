import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskList: [],
      taskOnState: {
        task: '',
        id: Date.now(),
        completed: false,
      }

    };
  };

  handleChanges = event => {
    this.setState({
      taskOnState: {
        ...this.state.taskOnState,
        [event.target.name]: event.target.value
      }
    });
  }

  addTask = event => {
    event.preventDefault();
    this.setState({
      taskList: [...this.state.taskList, this.state.taskOnState],
      taskOnState: {
        task: '',
        id: Date.now(),
        completed: false,
      },
    });
  };

  toggleCompleted = id => {
    this.setState({
      taskList: this.state.taskList.map(task =>
        task.id === id ? {...task, completed: !task.completed } : task
        )
    });
  };

  removeCompleted = () => {
    this.setState({
      taskList: this.state.taskList.filter(task => !task.completed)
    });
  };


  render() {
    return (
      <div>
        <h2>ToDoApp MVP</h2>
        <ToDoList
          taskList={this.state.taskList}
          toggleCompleted={this.toggleCompleted}
        />
        <ToDoForm
          propTask={this.state.taskOnState}
          handleChanges={this.handleChanges}
          addTask={this.addTask}
          removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
