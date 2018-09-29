import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import bootstrap from './assets/styles/framework/bootstrap.less';
import classes from './assets/styles/style.less';
import PageOne from './Pages/Pages1';
import PageTwo from './Pages/Pages2';
import Redirect from './Components/Redirect';

let notFound = () => {
  return (
    <div className={[classes.notfound, bootstrap.textCenter].join(' ')}>
      <h1 className={bootstrap.display3}>404 Not Found</h1>
      <div className={bootstrap.btnGroup}>
        <Link to="/" className={[bootstrap.btn, bootstrap.btnPrimary].join(' ')}>Go Home</Link>
      </div>
    </div>
  )
}

let Header = () => {
  return (
    <div className={[bootstrap.navbar, bootstrap.navbarLight].join(' ')}>
      <div className={bootstrap.container}>
        <ul className={[bootstrap.nav, bootstrap.navPills].join(' ')}>
          <li>
            <NavLink className={bootstrap.navLink} exact to="/" activeClassName={bootstrap.active}>Home</NavLink>
          </li>
          <li>
            <NavLink className={bootstrap.navLink} activeClassName={bootstrap.active} to="/page-two">Page Two</NavLink>
          </li>
          <li>
            <a className={bootstrap.navLink} target="_blank" href="https://github.com/KantaPaul/my-project">Project Code Git Repo</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main className={classes.mainwraper}>
            <div className={bootstrap.container}>
              <div className={bootstrap.row}>
                <div className={[bootstrap.colLg7, bootstrap.mxAuto].join(' ')}>
                  <div className={classes.App}>
                    <Switch>
                      <Route exact={true} path="/" component={PageOne} />
                      <Route path="/page-two" component={PageTwo} />
                      <Route component={notFound} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.bgOverlay}></div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
