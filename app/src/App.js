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
import SearchHeaderBar from './components/SearchHeaderBar/SearchHeaderBar'

import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          searchScreen: false 
      };
  }

  handleSearchBtnClick() {
    console.log("CLICK SEARCH");
    this.setState({
      searchScreen: true
    })
  }

  handleBackBtnClick() {
    console.log("CLICK BACK");
    this.setState({
      searchScreen: false
    })
  }

  _renderHeaderBar() {
    if (this.state.searchScreen) {
      return <SearchHeaderBar onBackBtnClick={this.handleBackBtnClick.bind(this)} />
    }
    return <HeaderBar onSearchBtnClick={this.handleSearchBtnClick.bind(this)} />
  }

  _renderFooterBar() {
    if (!this.state.searchScreen) {
      return <FooterBar />
    }
    return null
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {this._renderHeaderBar()}
            <Route path="/" component={Home} exact /> {/*exact: Only render the component if the url is exact*/}
            <Route path="/search" component={Search} />
            <Route path="/list" component={List} />
            {this._renderFooterBar()}
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
