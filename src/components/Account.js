import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import './Account.css';
import Form from './Form/Form';

class Account extends Component {

  handleResult(firstname, lastname, username, password, email) {
    alert(
      'First Name: ' + firstname + '\n'
      + 'Last Name: ' + lastname + '\n'
      + 'Username: ' + username + '\n'
      + 'Password: ' + password + '\n'
      + 'Email: ' + email
    );
  }

  render() {
    return (
      <div className="Account">
        <Card>
          <CardTitle className="CardTitle" title="Create Your Free Account" />
          <CardText>
            <Form handleResult={this.handleResult}></Form>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Account;
