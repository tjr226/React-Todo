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
    // console.log(event.target.value);
    // console.log(event.target.name);
    //  console.log(event.target.value);
    this.setState({
      taskOnState: {
        ...this.state.taskOnState,
        [event.target.name]: event.target.value
      }
    });
    console.log(this.state.taskOnState.id);

  }

  addTask = event => {
    // console.log('add event firing');
    event.preventDefault();
    // console.log(this.state.taskOnState);
    this.setState({
      taskList: [...this.state.taskList, this.state.taskOnState],
      taskOnState: {
        task: '',
        id: Date.now(),
        completed: false,
      },
    });
    // console.log(this.state.taskList);
    // console.log(this.state.taskOnState);

    // console.log(this.state.taskList);
  };

  render() {
    return (
      <div>
        <h2>ToDoApp MVP</h2>
        <ToDoList taskList={this.state.taskList} />
        <ToDoForm
          propTask={this.state.taskOnState}
          handleChanges={this.handleChanges}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
