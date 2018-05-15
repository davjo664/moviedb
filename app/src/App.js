import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import store from './store'
import Movies from './components/Movie';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">MovieDB</h1>
          </header>
          <hr />
          <Movies />
        </div>
      </Provider>
    );
  }
}

export default App;
