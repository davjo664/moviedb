//The root reducer

import { combineReducers } from 'redux';
import searchReducer from '../components/SearchHeaderBar/reducer';

export default combineReducers({
    searchReducer: searchReducer
})