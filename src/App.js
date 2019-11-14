import React, {Component} from 'react';
import './App.css';
import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import Task from "./Components/Task/Task";

class App extends Component {
  state = {
    newTask: 'this is trial message',
    tasks: [
      {message: 'hello, its me', id: '1'},
      {message: 'hello, iafd', id: '2'},
      {message: 'hello, agg', id: '3'},
      {message: 'hello, safaf', id: '4'},
    ],
  };
  changeMessage = (event) => {
    let newTask = event.target.value;
    this.setState({newTask});
  };
  addMessage = () => {

  };
  render() {
    return (
        <div className="App">
          <AddTaskForm
              val={this.state.newTask}
              onChange={(event) => this.changeMessage(event)}
          />
          {this.state.tasks.map(task => (
              <Task key={task.id} text={task.message}/>
          ))}
        </div>
    );
  }
}

export default App;
