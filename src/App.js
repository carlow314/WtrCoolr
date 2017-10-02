import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Form from './components/form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Form/>
      </div>
    );
  }
}

export default App;
