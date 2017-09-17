import React, { Component } from 'react';
import './Form.css';

import TextField from 'material-ui/TextField';

class Lastname extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.props.onUpdate(newValue);
  }

  render() {
    return (
      <div className="Lastname">
        <label>
        Last Name:<br />
        <TextField name="lastname" errorText={this.props.lastname.errorText} onChange={this.handleChange}/>
        </label>
      </div>
    );
  }
}

export default Lastname;
