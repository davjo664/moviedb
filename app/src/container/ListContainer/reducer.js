const initialState = {
    movies: [],
};
  
export default function(state: any = initialState, action: Function) {
    if (action.type === 'FETCH_MOVIES_SUCCESS') {
        return {
            ...state,
            movies: action.results,
        };
    }
    return state;
}