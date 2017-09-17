import React, { Component } from 'react';
import './Form.css';

import TextField from 'material-ui/TextField';

class Username extends Component {
  render() {
    return (
      <div className="Username">
        <label>
        Username:<br />
        <TextField name="username"/>
        </label>
      </div>
    );
  }
}

export default Username;
