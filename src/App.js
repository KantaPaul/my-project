import React, { Component } from 'react';
import bootstrap from './assets/styles/framework/bootstrap.less';
import classes from './assets/styles/style.less';
import Header from './Components/Header/Header';
import Users from './Components/Users/Users';
import InputAppend from './Components/Inputs/inputAppend';
import Adduser from './Components/AddUser/addUser.js';
import Comments from './Components/comments';
import Acitvity from './Components/Activity/Activites';


class App extends Component {
  render() {
    return (
      <main className={classes.mainwraper}>
        <div className={bootstrap.container}>
          <div className={bootstrap.row}>
            <div className={[bootstrap.colLg7, bootstrap.mxAuto].join(' ')}>
              <div className={classes.App}>
                <Header classes={bootstrap.clearfix} />
                <Users classes={bootstrap.clearfix}/>
                <InputAppend />
                <Adduser />
                <Comments />
                <Acitvity />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bgOverlay}></div>
      </main>
    );
  }
}

export default App;
