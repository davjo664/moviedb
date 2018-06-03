import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import 'typeface-roboto'

import store from './store'
import Login from './components/Login'
import Home from './screens/Home';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">MovieDB</h1>
          </header>
          <Home />
        </div>
      </Provider>
    );
  }
}

// class App extends Component {
//   render() {
//     return (

//       <div>
//         <h1>Welcome to MovieDB</h1>

//         <Login/>
//       </div>
//     )
//   }
// }

export default App;
