const initialState = ' ';

export default function filterMovie(state = initialState, action) {
    if (action.type === 'FIND_CARD') {
        return action.movies;
    }
    return state
}