import React, { Component } from 'react';
import './Form.css';

import TextField from 'material-ui/TextField';

class Email extends Component {
  render() {
    return (
      <div className="Email">
        <label>
            Email:<br />
            <TextField name="email" type="email"/>
        </label>
      </div>
    );
  }
}

export default Email;
