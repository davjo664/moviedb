import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Icon} from '@material-ui/core'
import { withRouter } from 'react-router-dom'

class DetailHeader extends Component {

    handleClick = (event, value) => {
        this.props.history.goBack();
    };

    render() {
        return (
            <AppBar position="static" color="inherit" style={{marginBottom: 3}}>
                <Toolbar>
                    <IconButton style={{justifyContent: 'left'}} color="inherit" aria-label="Back" onClick={this.handleClick}>
                        <Icon > arrow_back </Icon>
                    </IconButton>
                    <Typography style={{flex: 1}} variant="title" color="inherit">
                    movieDB
                    </Typography >
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(DetailHeader);