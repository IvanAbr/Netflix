import {GET_MOVIE} from '../const/movies';
import {FIND_MOVIE} from '../const/movies';
import {SET_VISIBILITY_MOVIE} from '../const/movies';

export const getMovie = (movies) => ({
    type: GET_MOVIE,
    movies
});

export const findMovie = (id) => ({
    type: FIND_MOVIE,
    id
});

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_MOVIE,
    filter
  })