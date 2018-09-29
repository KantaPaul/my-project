import React from 'react';
import bootstrap from '../../assets/styles/framework/bootstrap.less';
import classes from './Subtask.less';

let singleSubtask = (props) => {
  return (
    <div className={classes.singletask}>
      <div className={[bootstrap.customControl, bootstrap.customCheckbox].join(' ')}>
        <input type="checkbox" className={bootstrap.customControlInput} id="customCheck1" />
        <label className={bootstrap.customControlLabel} htmlFor="customCheck1"><span>Dokan theme page design</span></label>
      </div>
      <div className={classes.subtaskinfo}>
        <img src={require('../../assets/images/avatar/mini-avatar-5.png')} alt="mini avatar five" />
        <span>{props.name}</span>
      </div>
    </div>
  )
}

export default singleSubtask;