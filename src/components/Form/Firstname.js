import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Firstname extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.props.onUpdate(newValue);
  }

  render() {
    return (
      <div className="Firstname">
        <label>
          First Name:<br />
          <TextField name="firstname" errorText={this.props.firstname.errorText} onChange={this.handleChange}/>
        </label>
      </div>
    );
  }
}

export default Firstname;
