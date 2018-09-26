import React from 'react';
import classes from '../assets/styles/style.less';
import bootstrap from '../assets/styles/bootstrap.less';

let inputAppend = () => {
  return (
    <div className={classes.appendInput}>
      <div className={bootstrap.inputGroup}>
        <div className={bootstrap.inputGroupPrepend}>
          <span className={bootstrap.inputGroupText}>
            <img src={require('../assets/icons/align.png')} alt="align" />
          </span>
        </div>
        <input type="text" className={bootstrap.formControl} placeholder="Description" />
        <div className={bootstrap.inputGroupAppend}>
          <span className={bootstrap.inputGroupText}>
            <img src={require('../assets/icons/pencil.png')} alt="pencil" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default inputAppend;