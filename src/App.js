import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Account from './components/Account'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Account></Account>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
