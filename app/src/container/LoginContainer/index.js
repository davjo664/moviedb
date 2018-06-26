import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import config from '../../config/config';

import Login from '../../screens/Login';

class LoginContainer extends Component {

    loginUser = (userName, password, history) => {
      console.log("LOGIN USER");
      console.log(userName, password);
      console.log(history);
      var formData = new URLSearchParams();
      formData.append('username', userName);
      formData.append('password', password);

      fetch(`${config.api.url}/session/login`, {
        method: 'POST',
        body: formData,
        credentials: "include",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded",
        }
      })
      .then((res) => {
          console.log(res)
          if (!res.ok) {
            console.log("ERROR:",res.statusText)
          } else {
            history.replace('/');
            res.json().then((data) => {
              if (data) {
                  console.log("SUCCESS");
                  console.log(data);
              }
            })
          }
      })
    }

    registerUser = (userName, password, history) => {
      var formData = new URLSearchParams();
      formData.append('username', userName);
      formData.append('password', password);

      fetch(`${config.api.url}/user/register`, {
        method: 'POST',
        body: formData,
        credentials: "include",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded",
        }
      })
      .then((res) => {
          console.log(res)
          if (!res.ok) {
            console.log("ERROR:",res.statusText)
          } else {
            console.log("Registered")
          }
      })
    }

    render() {
      return (
        <Login
          movies={this.props.movies}
          loginUser={this.loginUser}
          registerUser={this.registerUser}
          history={this.props.history}
        />
      );
    }
  }


export default withRouter(LoginContainer)