import config from '../../config/config';

export function fetchMoviesByGenre(genre, page) {
    if ( !page ) {
        page = 1
    }
    return dispatch =>
        fetch(`${config.api.url}/movie?genre=${genre}&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.statusCode && data.statusCode !== 200) {
                console.log(data.message);
            } else {
                dispatch(
                     {
                        type: 'FETCH_MOVIES_BY_GENRE_SUCCESS',
                        results: data.results,
                        genre: genre
                    }
                );
            }
        })
}

export function setLoading(loading) {
    return {
        type: 'SET_LOADING',
        loading: loading,
    };
}