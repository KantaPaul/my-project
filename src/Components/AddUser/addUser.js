import React, {Component} from 'react';
import classes from './addUser.less';
import bootstrap from '../../assets/styles/bootstrap.less';

class AddUser extends Component {
  render() {
    return (
      <div className={classes.adduserWraper}>
        <div className={bootstrap.inputGroup}>
          <div className={bootstrap.inputGroupPrepend}>
            <span className={bootstrap.inputGroupText} id="basic-addon1">Dokan Theme De</span>
          </div>
          <input type="text" className={bootstrap.formControl} aria-label="Username" aria-describedby="basic-addon1" />
          <ul className={classes.userAddList}>
            <li data-title="Add User"><img src={require('../../assets/icons/person.png')} alt="person" /></li>
            <li data-title="Edit User"><img src={require('../../assets/icons/pencil.png')} alt="pencil" /></li>
            <li data-title="Edit Date"><img src={require('../../assets/icons/calender.png')} alt="calendar" /></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AddUser;