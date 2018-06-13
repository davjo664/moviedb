import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'

class SearchHeader extends Component {

    handleClick = (event, value) => {
        this.props.history.goBack();
    };

    _onChange = text => {
        console.log(this.props);
        this.props.updateSearchString(text);
        this.props.fetchSearchResults(text);
    };

    render() {
        return (
            <AppBar position="static" color="inherit" style={{marginBottom: 3}}>
                <Toolbar>
                    <IconButton style={{justifyContent: 'left'}} color="inherit" aria-label="Back" onClick={this.handleClick}>
                        <Icon > arrow_back </Icon>
                    </IconButton>
                    <TextField
                        value={this.props.searchString}
                        autoFocus={true}
                        style={{flex: 1, marginRight:10}}
                        onChange={event => this._onChange(event.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><Icon> search </Icon></InputAdornment>,
                        }}
                    />
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(SearchHeader);