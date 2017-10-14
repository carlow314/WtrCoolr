import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Landing from './components/landing/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       <Landing/>
       {/* <Form/> */}
      </div>
    );
  }
}

export default App;
