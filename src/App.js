import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Form></Form>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
