import React, { Component } from 'react';
import ListContacts from './ListContacts';

const contacts = [
  {
    "id": "Chander",
    "name": "Chander Bhanu",
    "handle": "chanderbhanu096",
    "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "Anksuh",
    "name": "Ankush Kumar",
    "handle": "ankushnation",
    "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "Bhanu",
    "name": "Bhanu Rana",
    "handle": "bhanurana",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ];

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ListContacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
