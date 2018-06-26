import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import 'typeface-roboto'

import store from './store'
import SearchContainer from './container/SearchContainer';
import HomeContainer from './container/HomeContainer';
import ListContainer from './container/ListContainer';
import LoginContainer from './container/LoginContainer';
import DetailContainer from './container/DetailContainer';

import { BrowserRouter, Route } from 'react-router-dom'
import Detail from './screens/Detail';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          searchScreen: false 
      };
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {/* {this._renderHeaderBar()} */}
            <Route path="/" component={HomeContainer} exact /> {/*exact: Only render the component if the url is exact*/}
            <Route path="/search" component={SearchContainer} />
            <Route path="/list" component={ListContainer} />
            <Route path="/detail" component={DetailContainer} />
            <Route path="/login" component={LoginContainer} />
            {/* {this._renderFooterBar()} */}
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
