import React, { Component } from 'react';
import logo from './logo.svg';
//import Navigation from './components/Navigation';
import './App.css';
import { todos } from './todos';
//console.log(todos);

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos
    }
  }
  
  render(){
    const thetodos = this.state.todos.map(function (todo, i){
      console.log('EL todo:',todo);
      return(
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>
              <h3>{todo.title}</h3>
              <span className='badge badge-pill badge-danger ml-2'>
                {todo.priority}
              </span>
            </div>
            <div className='card-body'>
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Tasks
            <span className='badge badge-pill badge-light ml-2'>
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className='container'>
          <div className='row mt-4'>
            {thetodos}
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo"></img>
      </div>
    )
  }
}

export default App;
