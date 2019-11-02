import React, { Component } from "react"; 
import ReactDOM from "react-dom";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out thr Trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: true
      },

      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  };
    markComplete = (id) => {
      this.setState ({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
            todo.completed = !todo.completed
        }
        return todo;
      })});
    }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete = {this.markComplete}/>
      </div>
    );
  }
}

export default App;
