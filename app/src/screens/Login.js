import React, { Component } from 'react';
import '../Login.css';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Background from '../images/Movie-Poster-Wallpaper.jpg';

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
            <div style={{ padding: 20,
                    backgroundImage: "url(" + Background + ")",
                    backgroundSize: "cover",
                    height: window.innerHeight }}>
                <Card style={{ marginTop: window.innerHeight / 6 }}>
                    <CardContent>
                        <div align="center">
                        <Typography align="center" variant="display3">MovieDB</Typography>
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
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const style = {
    margin: 10,
};

export default Login;