import React, {Component} from 'react';
import nanoid from 'nanoid'

import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import Task from "./Components/Task/Task";

import './App.css';

class App extends Component {
  state = {
    currentTask: 'this is a trial message',
    tasks: [
      {message: 'This is the first task', id: nanoid()},
      {message: 'This is the second task', id: nanoid()},
      {message: 'This is the third task', id: nanoid()},
      {message: 'This is the fourth task', id: nanoid()},
    ],
  };
  changeMessage = (event) => {
    let currentTask = event.target.value;
    this.setState({currentTask});
  };
  addNewTask = () => {
    let message = this.state.currentTask;
    let currentTask = {message, id: nanoid()};
    let tasks = [...this.state.tasks];
    tasks.push(currentTask);
    this.setState({tasks});
  };
  deleteTask = (id) => {
    const index = this.state.tasks.findIndex(t => t.id === id);
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({tasks});
  };

  render() {
    return (
        <div className="App">
          <AddTaskForm
              val={this.state.currentTask}
              onChange={(event) => this.changeMessage(event)}
              onClick={this.addNewTask}
          />
          {this.state.tasks.map(task => (
              <Task
                  key={task.id}
                  text={task.message}
                  onRemove={() =>this.deleteTask(task.id)}
              />
          ))}
        </div>
    );
  }
}

export default App;
