import React, { Component } from 'react';
import '../Login.css';
import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state={
            username:'',
            password:''
        }
    }

    // handleClick(event) {
    //     var apiBaseUrl = "http://localhost:4000/api/";
    //     var self = this;
    //     var payload={
    //         "email":this.state.username,
    //         "password":this.state.password
    //     }
    //     axios.post(apiBaseUrl+'login', payload)
    //     .then(function (response) {
    //         console.log(response);
    //         if(response.data.code == 200){
    //             console.log("Login successfull");
    //             var uploadScreen=[];
    //             uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    //             self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    //         }
    //         else if(response.data.code == 204){
    //             console.log("Username password do not match");
    //             alert("username password do not match")
    //         }
    //         else{
    //             console.log("Username does not exists");
    //             alert("Username does not exist");
    //         }
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // }

    render() {
        return (
            <div>
                <MuiThemeProvider>
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
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Login;