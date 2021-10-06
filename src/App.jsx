import React, { Component } from 'react';
import DisplayName from './components/DisplayName/DisplayName';
import AlertUser from './components/AlertUser/AlertUser';
import SuperheroTable from './components/SuperheroTable/SuperheroTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Reggie',
      lastName: 'White',
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
      superheroes: [
        {
            superheroId: 1,
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondaryAbility: 'Rich'
        },
        {
            superheroId: 2,
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondaryAbility: 'Fly'
        },
        {
            superheroId: 3,
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondaryAbility: 'Shoots web'
        }
    ]
    } 
  }
  render() { 
    return ( 
      <div id = "container-fluid">
        <DisplayName firstName = {this.state.firstName} lastName = {this.state.lastName} names = {this.state.names}/>
        <hr />
        <br />
        <AlertUser />
        <hr />
        <SuperheroTable heroes = {this.state.superheroes}/>
      </div>
     );
  }
}
 
export default App;
