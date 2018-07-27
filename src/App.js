import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      people: {}
    }
  }
  componentDidMount(){
    axios.get('/people').then(()=>{

    })
  }

  
  render() {
    let allUsers = this.state.people.map(people=>{
        return people.data
    })
    return (
      <div className="App">
       {allUsers}
      </div>
    );
  }
}

export default App;
