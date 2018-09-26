import React from 'react';
import classes from './Header.less';
import global from '../assets/styles/style.less';

let header = (props) => {
  return (
    <div className={classes.cardHeader}>
      <div className={props.classes}>
        <div className={global.leftContet}>
          <span className={classes.badge}><img src={require('../assets/icons/check.png')} alt="check mark" /> Completed</span>
        </div>
        <div className={global.rightCotent}>
          <p className={classes.textContent}>Created by <span>Ashraf Hossain</span> on <span>june 20</span></p>
          <img src={require('../assets/icons/dots.png')} alt="dots" />
        </div>
      </div>
      <h2 className={classes.title}>Single Task Page Design for Project Manager</h2>
    </div>
  )
}

export default header;