//The root reducer

import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

export default combineReducers({
    movies: movieReducer
})