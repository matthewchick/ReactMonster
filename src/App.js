import React, { Component } from 'react';   //destructing
import {CardList} from './components/card-list/card-list.component';

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
    fetch('https://jsonplaceholder.typicode.com/users')   //asynch communication handling
    .then(response => response.json())                    //convert into json format
    .then(users => this.setState({ monsters: users }));
  }
  /* name="Matthew" will be passed to props object
     Anything is props.children which is existed between <CardList> Anything </CardList>
  */
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>
        
        </CardList>
        
        
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
