import React, { Component } from 'react';
import '../Login.css';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state={
            username:'',
            password:''
        }
    }

    

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div align="center">
                    <h1 class="login">MovieDB</h1>
                    <TextField
                        id="username"
                        label="Username"
                        margin="normal"
                        onChange = {(event,newValue) => this.setState({username:newValue})}
                    />
                    <br/>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        margin="normal"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <Button 
                        color="primary"
                        variant="contained" 
                        style={style}
                        onClick={(event) => this.handleClick(event)}
                        >Login</Button>
                    <br/>
                    <Button 
                        color="secondary"
                        variant="contained" 
                        style={style}
                        onClick={(event) => this.handleClick(event)}
                        >Register</Button>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Login;