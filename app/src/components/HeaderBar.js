import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from '@material-ui/core'

import { withRouter } from 'react-router-dom'

class HeaderBar extends Component {

    handleClick = (event, value) => {
        this.props.history.push("/search");
    };

    render() {
        return (
            <AppBar position="static" color="inherit" style={{marginBottom: 3}}>
                <Toolbar>
                    <Typography style={{flex: 1}} variant="title" color="inherit">
                    MovieDB
                    </Typography >
                    <IconButton color="inherit" aria-label="Menu" onClick={this.handleClick}>
                    <Icon> search </Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(HeaderBar);