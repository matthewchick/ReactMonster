import React, { Component } from 'react';   //destructing
import {CardList} from './components/card-list/card-list.component';

import './App.css';

// class component
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {   // promise in ES6
    fetch('https://jsonplaceholder.typicode.com/users')   //asynch communication handling
    .then(response => response.json())                    //convert into json format
    .then(users => this.setState({ monsters: users }));
  }

  /* name="Matthew" will be passed to props object
     Anything is props.children which is existed between <CardList> Anything </CardList>
     this.setState is asynchronise event - onchange event - React Synthetic event
     When this.setState is changed, it will call render()
  */
  render() {
    const { monsters, searchField } = this.state;  // object restruct - monsters = this.state.monster
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      ) 

    return (
      <div className="App">
        <input type='search' 
          placeholder='search monsters' 
          onChange={e => {
            this.setState({ searchField: e.target.value }, () =>
            console.log(this.state)
            );
          }} 
        />
        <CardList monsters={filteredMonsters} >
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
