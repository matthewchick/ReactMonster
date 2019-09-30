import React, { Component } from 'react';   //destructing
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

// class component
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    // bind () is used to bind handleChange(e)
    // this.handleChange = this.handleChange.bind(this);
  }
  // Use => to solve this undefined problem and then do not need to use bind()  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
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
    console.log('filteredMonsters',filteredMonsters)
    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
