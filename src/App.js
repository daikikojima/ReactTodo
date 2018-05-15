import React, { Component } from 'react';
import './App.css'
import AddTodo from './AddTodo'
import List from './List'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.delete = this.delete.bind(this)
  }
  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  delete(i) {
    this.state.todos.splice(i, 1)
    this.setState({
      todos: this.state.todos
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <List props={this.state} delete = {this.delete} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
