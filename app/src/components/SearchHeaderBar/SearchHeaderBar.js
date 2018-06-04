import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from '@material-ui/core'

import { withRouter } from 'react-router-dom'

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import {
  updateSearchString
} from './actions';

class SearchHeaderBar extends Component {

    handleClick = (event, value) => {
        this.props.onBackBtnClick();
        this.props.history.goBack();
    };

    _onChange = text => {
        this.props.updateSearchString(text);
        // this.props.fetchSearchResults(text);
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

const mapStateToProps = state => ({
    searchString: state.searchReducer.searchString,
});
  
const mapDispatchToProps = dispatch => {
    return {
        updateSearchString: (searchString) => {
        dispatch(updateSearchString(searchString));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchHeaderBar))