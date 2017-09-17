import React, { Component } from 'react';
import './Form.css';

import TextField from 'material-ui/TextField';

class Password extends Component {
  render() {
    return (
      <div className="Password">
        <label>
            Password:<br />
            <TextField name="password" type="password"/>
        </label>
      </div>
    );
  }
}

export default Password;
