import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import {
  updateSearchString,
  fetchSearchResults,
  setLoading
} from './actions';

import Search from '../../screens/Search';

class SearchContainer extends Component {
    render() {
      return (
        <Search
          updateSearchString={this.props.updateSearchString}
          fetchSearchResults={this.props.fetchSearchResults}
          searchString={this.props.searchString}
          results={this.props.results}
          page={this.props.page}
          isLoading={this.props.isLoading}
          setLoading={this.props.setLoading}
        />
      );
    }
  }

const mapStateToProps = state => ({
    searchString: state.searchReducer.searchString,
    results: state.searchReducer.results,
    page: state.searchReducer.page,
    isLoading: state.searchReducer.isLoading
});
  
const mapDispatchToProps = dispatch => {
    return {
        updateSearchString: (searchString) => {
            dispatch(updateSearchString(searchString));
        },
        fetchSearchResults: (searchString, page) => {
            dispatch(fetchSearchResults(searchString, page));
        },
        setLoading: (loading) => {
            dispatch(setLoading(loading));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer))