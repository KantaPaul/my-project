import React, { Component } from 'react';
import classes from './assets/styles/style.less';
import bootstrap from './assets/styles/bootstrap.less';
import Header from './Components/Header';
import Users from './Components/Users';
import InputAppend from './Components/inputAppend';
import Comments from './Components/comments';
import Acitvity from './Components/Activity/Activites';
import Adduser from './Components/AddUser/addUser';

class App extends Component {
  render() {
    return (
      <main className={classes.mainWraper}>
        <div className={bootstrap.container}>
          <div className={bootstrap.row}>
            <div className={[bootstrap.colLg8, bootstrap.mxAuto].join(' ')}>
              <div className={classes.App}>
                <Header classes={bootstrap.clearfix} />
                <Users />
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
