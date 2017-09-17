import React, { Component } from 'react';
import './Form.css';
import Firstname from './Firstname'
import Lastname from './Lastname'
import Username from './Username'
import Password from './Password'
import Email from './Email'


import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Form extends Component {
  constructor(props) {
    super(props);

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
  }

  submitAccount() {
    if(this.state.user.firstname.isValid
      && this.state.user.lastname.isValid
      && this.state.user.username.isValid
      && this.state.user.password.isValid
      && this.state.user.email.isValid) {
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

  render() {
    return (
      <div className="Form">
        <Card>
          <CardTitle className="CardTitle" title="Create Your Free Account" />
          <CardText>
            <form>
              <Firstname firstname={this.state.user.firstname} onUpdate={this.onFirstNameUpdate}></Firstname><br />
              <Lastname lastname={this.state.user.lastname} onUpdate={this.onLastNameUpdate}></Lastname><br />
              <Username></Username><br />
              <Password></Password><br />
              <Email></Email><br />
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
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Form;
