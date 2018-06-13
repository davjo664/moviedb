import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {
  fetchMoviesByGenre,
  setLoading
} from './actions';

import Home from '../../screens/Home';

class HomeContainer extends Component {
    render() {
      return (
        <Home
          movies={this.props.movies}
          fetchMoviesByGenre={this.props.fetchMoviesByGenre}
          genres={this.props.genres}
          setLoading={this.props.setLoading}
          isLoading={this.props.isLoading}
        />
      );
    }
  }

const mapStateToProps = state => ({
    movies: state.homeReducer.movies,
    genres: state.homeReducer.genres,
    isLoading: state.homeReducer.isLoading
});
  
const mapDispatchToProps = dispatch => {
    return {
      fetchMoviesByGenre: (genre, page) => {
          dispatch(fetchMoviesByGenre(genre, page));
      },
      setLoading: (loading) => {
        dispatch(setLoading(loading));
    },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer))