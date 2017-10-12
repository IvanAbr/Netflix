const initialState = 'title';

export default function setSearch(state = initialState, action) {
    if (action.type === 'SET_SEARCH') {
        return action.name;
    }
    return state
}