import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Username extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.props.onUpdate(newValue);
  }

  render() {
    return (
      <div className="Username">
        <label>
          Username:<br />
          <TextField name="username" errorText={this.props.username.errorText} onChange={this.handleChange}/>
        </label>
      </div>
    );
  }
}

export default Username;
