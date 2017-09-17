import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Password extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.props.onUpdate(newValue);
  }

  render() {
    return (
      <div className="Password">
        <label>
            Password:<br />
            <TextField name="password" type="password" errorText={this.props.password.errorText} onChange={this.handleChange}/>
        </label>
      </div>
    );
  }
}

export default Password;
