import React, { Component } from 'react';
import './App.css';
import Button from './components/button'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      people: []
    }
  }

  getUsers = () => {
    axios.get('/people').then((response)=>{
      this.setState({
        people: response.data
      })
    })
  }

  
  render() {
    let allUsers = this.state.people.map(people=>{
        return <div>name:={people.name} </div>
    })
    return (
      <div className="App">
       {allUsers}
       <Button getMyUsers={this.getUsers}/>
      </div>
    );
  }
}

export default App;
