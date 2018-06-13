const initialState = {
    movies: {},
    genres: [],
    isLoading: false,
};
  
export default function(state: any = initialState, action: Function) {
    if (action.type === 'FETCH_MOVIES_BY_GENRE_SUCCESS') {
        let movies = state.movies;
        if (movies[action.genre]) {
            movies[action.genre] = [...movies[action.genre], ...action.results]
        } else {
            movies[action.genre] = [...action.results]
        }
        return {
            ...state,
            movies: movies,
            genres: [...state.genres, action.genre],
            isLoading: false
        };
    } else if (action.type === 'SET_LOADING') {
        return {
            ...state,
            isLoading: action.loading
        }
    }
    return state;
}