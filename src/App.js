import React, { Component } from 'react';
import './App.css';
import classes from './assets/style.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className={classes.header}> Hello </h1>
      </div>
    );
  }
}

export default App;
