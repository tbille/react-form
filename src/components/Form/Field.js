import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Field extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.props.onUpdate(newValue);
  }

  render() {
    return (
      <div className="Field">
        <label>
          {this.props.label}:<br />
          <TextField name={this.props.label} type={this.props.type} errorText={this.props.data.errorText} onChange={this.handleChange}/>
        </label>
      </div>
    );
  }
}

export default Field;
