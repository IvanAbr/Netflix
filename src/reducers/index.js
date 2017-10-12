import { combineReducers } from 'redux'

import  movies  from './movies';
import  visibilityFilter  from './visibilityFilter';
import  filterMovie  from './filter';
import  setSearch  from './setSearch';

const reducer = combineReducers({
    movies,
    visibilityFilter,
    setSearch
})

export default reducer;