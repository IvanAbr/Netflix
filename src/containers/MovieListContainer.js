import { connect } from 'react-redux';
import { findMovie } from '../actions/movies.js';
import MovieList from '../components/MovieList/MovieList';


const getVisibleTodos = (movies, filter) => {
    console.log(movies,filter)
    switch (filter) {
      case 'SHOW_DATA':
        return movies.sort((t1,t2) => 
        parseInt(t1.premiered)-parseInt(t2.premiered))
      case 'SHOW_RATING':
        return movies.sort((t1,t2) => 
        t1.rating.average-t2.rating.average)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

const mapStateToProps = (state) => console.log(state)({
  
    movies: getVisibleTodos(state.movies, state.visibilityFilter)
});

const mapDispatchToProps = {
    onTodoClick: findMovie,
  }

const MovieListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);

export default MovieListContainer