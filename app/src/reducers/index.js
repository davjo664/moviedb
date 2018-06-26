//The root reducer

import { combineReducers } from 'redux';
import searchReducer from '../container/SearchContainer/reducer';
import homeReducer from '../container/HomeContainer/reducer';
import listReducer from '../container/ListContainer/reducer';

export default combineReducers({
    searchReducer: searchReducer,
    homeReducer: homeReducer,
    listReducer: listReducer,
})