import React, { Fragment } from 'react'
import { Button, TextField, Typography, Grid } from 'material-ui'

const Login = (props) =>
<Grid container 
    spacing={8} 
    sm={12} xs={12}
    direction={'column'}
    justify={'center'}
    alignItems={'center'}>
    <Grid item>
        <Typography 
            variant="display3" 
            color="inherit">Movie DB
        </Typography>
    </Grid>
    <Grid item xs>
        <TextField
            id="email_login"
            label="E-Mail"
            margin="normal"
        />
    </Grid>
    <Grid item xs>    
        <TextField
            id="password_login"
            label="Password"
            type="password"
            margin="normal"
        />
    </Grid>
    <Grid item xs>
        <Button variant="raised" color="primary">Login</Button>
    </Grid>
</Grid>

export default Login