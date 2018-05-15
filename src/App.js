import React, { Component } from 'react';
import './App.css'
import AddTodo from './AddTodo'
import List from './List'

class App extends Component {
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
