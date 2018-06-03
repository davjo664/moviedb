import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import 'typeface-roboto'

import store from './store'
import Login from './components/Login'
import Home from './screens/Home';
import Search from './screens/Search';
import List from './screens/List';
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'

import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <HeaderBar />
            <Route path="/" component={Home} exact /> {/*exact: Only render the component if the url is exact*/}
            <Route path="/search" component={Search} />
            <Route path="/list" component={List} />
            <FooterBar />
          </div>
        </BrowserRouter>
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
