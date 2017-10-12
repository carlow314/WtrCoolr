import React, { Component } from 'react';
import header from './header.css';
import Landing from '../../components/landing';

class Main extends Component {
  render() {
    return (
      <div className="Header">
        <header className="jumbotron">
          <h1 className="App-title">NYAME</h1>
        </header>
      </div>
    );
  }
}

export default Main;
