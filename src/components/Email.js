import React, { Component } from 'react';
import './Form.css';

import TextField from 'material-ui/TextField';

class Email extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.props.onUpdate(newValue);
  }

  render() {
    return (
      <div className="Email">
        <label>
            Email:<br />
            <TextField name="email" errorText={this.props.email.errorText} onChange={this.handleChange}/>
        </label>
      </div>
    );
  }
}

export default Email;
