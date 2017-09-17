import React, { Component } from 'react';
import {CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import validator from 'validator'

import './Form.css';
import Firstname from './Firstname'
import Lastname from './Lastname'
import Username from './Username'
import Password from './Password'
import Email from './Email'

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleResult = props.handleResult;
    this.state = {
      user: {
        firstname: {
          value: '',
          isValid: false,
          errorText: ''
        },
        lastname: {
          value: '',
          isValid: false,
          errorText: ''
        },
        username: {
          value: '',
          isValid: false,
          errorText: ''
        },
        password: {
          value: '',
          isValid: false,
          errorText: ''
        },
        email: {
          value: '',
          isValid: false,
          errorText: ''
        }
      }
    };

    this.submitAccount = this.submitAccount.bind(this);
    this.onFirstNameUpdate = this.onFirstNameUpdate.bind(this);
    this.onLastNameUpdate = this.onLastNameUpdate.bind(this);
    this.onUserNameUpdate = this.onUserNameUpdate.bind(this);
    this.onPasswordUpdate = this.onPasswordUpdate.bind(this);
    this.onEmailUpdate = this.onEmailUpdate.bind(this);
  }

  isValid() {
    return this.state.user.firstname.isValid
      && this.state.user.lastname.isValid
      && this.state.user.username.isValid
      && this.state.user.password.isValid
      && this.state.user.email.isValid;
  }

  submitAccount() {
    if(this.isValid()) {
      this.handleResult(
        this.state.user.firstname.value,
        this.state.user.lastname.value,
        this.state.user.username.value,
        this.state.user.password.value,
        this.state.user.email.value
      );
    } else {
      let user = {};
      for(var key in this.state.user) {
        let value = this.state.user[key];
        if(!this.state.user[key].isValid) {
          value.errorText = 'This field is required.';
        }
        user[key] = value;
      }
      this.setState({user})
    }
  }

  onFirstNameUpdate(newValue) {
    const user = this.state.user;

    if(/^[a-zA-Z]+$/.test(newValue)) {
      user['firstname'] = {
        value: newValue,
        isValid: true,
        errorText: ''
      };
    } else {
      user['firstname'] = {
        value: newValue,
        isValid: false,
        errorText: 'Firstname should only contain capital or small letters'
      };
    }

    this.setState(user);
  }

  onLastNameUpdate(newValue) {
    const user = this.state.user;

    if(newValue === this.state.firstname.value) {
      user['lastname'] = {
        value: newValue,
        isValid: true,
        errorText: ''
      };
    } else {
      user['lastname'] = {
        value: newValue,
        isValid: false,
        errorText: 'Last name should be the same as the first name'
      };
    }

    this.setState(user);
  }

  onUserNameUpdate(newValue) {
    const user = this.state.user;

    if(/^[a-z._]+$/.test(newValue)) {
      user['username'] = {
        value: newValue,
        isValid: true,
        errorText: ''
      };
    } else {
      user['username'] = {
        value: newValue,
        isValid: false,
        errorText: 'Username should only contain small letters, the "." and the "_" characters.'
      };
    }

    this.setState(user);
  }

  onPasswordUpdate(newValue) {
    const user = this.state.user;

    if(newValue.length >= 8) {
      user['password'] = {
        value: newValue,
        isValid: true,
        errorText: ''
      };
    } else {
      user['password'] = {
        value: newValue,
        isValid: false,
        errorText: 'Password should be at least 8 characters long.'
      };
    }

    this.setState(user);
  }

  onEmailUpdate(newValue) {
    const user = this.state.user;

    if(validator.isEmail(newValue)) {
      user['email'] = {
        value: newValue,
        isValid: true,
        errorText: ''
      };
    } else {
      user['email'] = {
        value: newValue,
        isValid: false,
        errorText: 'Email should be a valid email address'
      };
    }

    this.setState(user);
  }

  render() {
    return (
      <div className="Form">
        <form>
          <Firstname firstname={this.state.user.firstname} onUpdate={this.onFirstNameUpdate}></Firstname><br />
          <Lastname lastname={this.state.user.lastname} onUpdate={this.onLastNameUpdate}></Lastname><br />
          <Username username={this.state.user.username} onUpdate={this.onUserNameUpdate}></Username><br />
          <Password password={this.state.user.password} onUpdate={this.onPasswordUpdate}></Password><br />
          <Email email={this.state.user.email} onUpdate={this.onEmailUpdate}></Email><br />
          <p>
              By clicking Submit, I agree that I have read and accepted the <a href="#/">Terms and Conditions</a>.
          </p>
          <CardActions>
            <FlatButton
              backgroundColor="#0775A8"
              onClick={this.submitAccount}
              label="Submit">
            </FlatButton>
          </CardActions>
        </form>
      </div>
    );
  }
}

export default Form;
