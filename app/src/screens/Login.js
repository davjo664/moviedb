import React, { Component } from 'react';
import '../Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Background from '../images/Movie-Poster-Background.jpg';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state={
            username:'',
            password:''
        }
    }

    handleLogin = (event) => {
        this.props.loginUser(this.state.username, this.state.password, this.props.history);
    }

    handleRegister = (event) => {
        this.props.registerUser(this.state.username, this.state.password, this.props.history);
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
                        <Typography align="center" variant="display3">movieDB</Typography>
                        <TextField
                            id="username"
                            label="Username"
                            margin="normal"
                            onChange = {(event) => this.setState({username:event.target.value})}
                        />
                        <br/>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            margin="normal"
                            onChange = {(event) => this.setState({password:event.target.value})}
                        />
                        <br/>
                        <Button 
                            color="primary"
                            variant="contained" 
                            style={style}
                            onClick={this.handleLogin.bind(this)}
                            >Login</Button>
                        <br/>
                        <Button 
                            color="secondary"
                            variant="contained" 
                            style={style}
                            onClick={this.handleRegister.bind(this)}
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