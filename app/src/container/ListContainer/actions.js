import config from '../../config/config';

export function fetchMovies(history) {
    return dispatch =>
        fetch(`${config.api.url}/watchlist`, {
            method: 'GET',
            credentials: "include",
        })
        .then((res) => {
            if (!res.ok) {
                if (res.status == 403) {
                    //Not logged in
                    console.log("NOT LOGGED IN");
                    history.replace('/login');
                } else {
                    console.log("ERROR:",res.statusText)
                }
            } else {
                res.json().then((data) => {
                    if (data) {
                        dispatch(
                            {
                            type: 'FETCH_MOVIES_SUCCESS',
                            results: data,
                            }
                        );
                    }
                })
            }
        })
}
