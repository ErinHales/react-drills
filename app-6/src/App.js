import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      todoItems: ["Clean Kitchen", "Do Laundry", "Pay Bills", "Read Tale of Two Cities"]
    }
  }

  updateInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  updateTodoList = () => {
    var todoListArr = this.state.todoItems;
    todoListArr.push(this.state.userInput);
    console.log(todoListArr)
    this.setState({
      todoItems: todoListArr,
      input: ""
    })
  }
  
  render() {
    let list = this.state.todoItems.map( ( element, index ) => {
      return (
        <Todo key={ index } task={ element } />
      )
    })
    
    return (
      <div>
        <h1>To-do List</h1>
        <div className="searchBar">
          <input 
            type="text"
            placeholer="Enter new task" 
            onChange={(e) => this.updateInput(e)}/>
          <button onClick={() => this.updateTodoList()}>Add Item</button>
        </div>
        {list}
      </div>
    );
  }
}

export default App;