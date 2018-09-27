import React, {Component} from 'react';
import bootstrap from '../../assets/styles/framework/bootstrap.less';
import classes from './addUser.less';

class AddUser extends Component {
  render() {
    return (
      <div className={classes.adduserWraper}>
        <div className={bootstrap.inputGroup}>
          <div className={bootstrap.inputGroupPrepend}>
            <span className={[bootstrap.inputGroupText, classes.inputGroupText].join(' ')} id="basic-addon1">Dokan Theme De</span>
          </div>
          <input type="text" className={[bootstrap.formControl, classes.formControl].join(' ')} aria-label="Username" aria-describedby="basic-addon1" />
          <ul className={classes.userAddList}>
            <li data-title="Add User"><img src={require('../../assets/images/icons/person.png')} alt="person" /></li>
            <li data-title="Edit User"><img src={require('../../assets/images/icons/pencil.png')} alt="pencil" /></li>
            <li data-title="Edit Date"><img src={require('../../assets/images/icons/calender.png')} alt="calendar" /></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AddUser;