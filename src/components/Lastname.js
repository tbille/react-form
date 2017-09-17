import React, { Component } from 'react';
import './Form.css';

import TextField from 'material-ui/TextField';

class Lastname extends Component {
  render() {
    return (
      <div className="Lastname">
        <label>
        Last Name:<br />
        <TextField name="lastname"/>
        </label>
      </div>
    );
  }
}

export default Lastname;
