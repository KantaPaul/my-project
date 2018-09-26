import React, { Component } from 'react';
import classes from './assets/styles/style.less';
import bootstrap from './assets/styles/bootstrap.less';
import Header from './Components/Header';
import Users from './Components/Users';
import InputAppend from './Components/inputAppend';
import Comments from './Components/comments';
import Acitvity from './Components/Activity/Activites';

class App extends Component {
  render() {
    return (
      <div className={bootstrap.container}>
        <div className={bootstrap.row}>
          <div className={bootstrap.colLg12}>
            <div className={classes.App}>
              <Header classes={bootstrap.clearfix} />
              <Users />
              <InputAppend />
              <Comments />
              <Acitvity />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
