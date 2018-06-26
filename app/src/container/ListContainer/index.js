import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {
  fetchMovies,
} from './actions';
import config from '../../config/config';

import List from '../../screens/List';

class ListContainer extends Component {

  fetchMovieDetail = (movieId, history) => {
    fetch(config.api.url+`/movie/`+movieId, {
      method: 'GET',
    })
    .then((res) => {
        console.log(res)
        if (!res.ok) {
          console.log("ERROR:",res.statusText)
        } else {
          res.json().then((data) => {
            if (data) {
                this.props.history.push({
                  pathname: "/detail",
                  movie: data});
            }
          })
        }
    })
  }

    render() {
      return (
        <List
          movies={this.props.movies}
          fetchMovies={this.props.fetchMovies}
          history={this.props.history}
          fetchMovieDetail={this.fetchMovieDetail}
        />
      );
    }
  }

const mapStateToProps = state => ({
    movies: state.listReducer.movies,
});
  
const mapDispatchToProps = dispatch => {
    return {
      fetchMovies: (history) => {
          dispatch(fetchMovies(history));
      },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContainer))