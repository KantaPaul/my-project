import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './assets/style.less';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.header}>
          <img src={logo} className={classes.logo} alt="logo" />
          <h1 className={classes.title}>Welcome to React</h1>
        </header>
        <p className={classes.red}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
