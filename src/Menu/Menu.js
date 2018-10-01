import React from 'react';
import {NavLink} from 'react-router-dom';
import bootstrap from '../assets/styles/framework/bootstrap.less';

let Menu = () => {
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
            <NavLink className={bootstrap.navLink} activeClassName={bootstrap.active} to="/page-three">Page Three</NavLink>
          </li>
          <li>
            <NavLink className={bootstrap.navLink} activeClassName={bootstrap.active} to="/page-four">Page Four</NavLink>
          </li>
          <li>
            <a className={bootstrap.navLink} target="_blank" href="https://github.com/KantaPaul/my-project">Project Code Git Repo</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;