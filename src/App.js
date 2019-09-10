import React, { Component } from 'react';   //destructing
import './App.css';

// class component
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {   // promise in ES6
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())   //convert into json format
    .then(users => this.setState({ monsters: users }));
  }
  
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
          ))}
      </div>
    );
  }
}

/* functional or stateless component
function App() {s
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
