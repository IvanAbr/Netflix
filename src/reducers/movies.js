import {FIND_MOVIE} from '../const/movies';
import {GET_MOVIE} from '../const/movies';


const movies = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case GET_MOVIE:
            return action.movies;
            
        // case FIND_MOVIE:
        //     return state.filter(movie =>
        //         {movie.name !== action.name
        //         console.log(movie)} );

        // case GET_MOVIE: 
        //     return state.map(movie => {
        //         if (movie.id === action.id) {
        //             return {...movie, done: !movie.done};
        //         }
        //         return movie;
        //     });
        
        default: return state;
    }
}
export default movies;
