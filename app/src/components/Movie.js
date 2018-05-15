import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions'

class Movies extends Component {
    componentWillMount() {

        // Calling action fetchPosts() which returns a dispatch function. The dispatch function are executed from here
        // and calls the reducer. The reducer updates the Redux Store to the new state. We have to specify which of the 
        // states we are interested in for this component, we do this in the mapStatetoProps object.
        this.props.fetchMovies();
    }

    render() {
        const renderMovies = this.props.movies.map((movie) => (
            <div key={movie.id}> 
                <h3> {movie.title} </h3>
                <p> {movie.overview} </p>
            </div>
        ));
        
        return (
            <div> 
                <ul>
                    {renderMovies}
                </ul>
            </div>
        )
    }
}

Movies.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
}

// The state of the Redux store has to be mapped to propeties that the component is interested of.
// state: current state of the redux store is given via the connect function
// state.posts: we specify that we want a state that is updated by the postReducer (see root reducer -> posts:postReducer)
// state.posts.items: the items state updated by the postReducer
const mapStateToProps = (state) => ({
    movies: state.movies.items
});
// Now we have this.props.posts because we mapped the state to a prop

// Map the avaliable dispatch actions to the components props.
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies())
    }
};

// Connects the component to the redux store that is provideed by the <Provider />
export default connect(mapStateToProps, mapDispatchToProps)(Movies);