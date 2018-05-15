// Evaluates calls done by component to create a dispatch call to the reducer.

import {FETCH_MOVIES} from './types';

// Redux thunk handles async calls and it returns a function instead of an object so it can perform the detach later
// normal action creators would just return an object like:
// export function withdrawMoney(amount) {
//     return {
//         type: 'WITHDRAW',
//         amount
//     };
// }

export function fetchMovies() {
    return function(dispatch) {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=dc26abc8af32720ec9f3dc483dc521ae&with_genres=28&sort_by=vote_average.desc')
        .then((res) => res.json())
        .then((posts) => {
            dispatch({
                type: FETCH_MOVIES,
                payload: posts.results
            })
        })
    }
}