let genresMap = new Map([["Action",28],["Crime",80],["Drama",18],["Fantasy",14],["Adventure", 12], ["Animation", 16], ["Horror",27],["Western",37], ["Comedy",35]]);

export function fetchMoviesByGenre(genre, page) {
    if ( !page ) {
        page = 1
    }
    let genreId = genresMap.get(genre);
    return dispatch =>
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=dc26abc8af32720ec9f3dc483dc521ae&with_genres=${genreId}&sort_by=vote_average.desc&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.statusCode && data.statusCode != 200) {
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