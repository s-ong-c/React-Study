import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>welcome to React </h2>
        </div>
        <p className="App-intro">
         To get started , edit <code>src/App.js </code> and save to reload.
        </p>
    </div>
    );
  }
}

export default App;
/*
function getRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
  
}
class App extends Component {
  state ={
    color:'#000000'
  }
  
  handleClick = () =>{
      this.setState({
        color:getRandomColor()
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상 </button>
        <LifeCycleSample color={this.state.color}/>
    </div>
    );
  }
}
*/