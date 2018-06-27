
import config from '../../config/config';
const apiKey = 'dc26abc8af32720ec9f3dc483dc521ae';
export function updateSearchString(searchString) {
    return {
        type: 'UPDATE_SEARCH_STRING',
        searchString,
    };
}

export function setLoading(loading) {
    return {
        type: 'SET_LOADING',
        loading: loading,
    };
}

export function fetchSearchResultsSuccess(data) {
  return {
    type: 'FETCH_RESULTS_SUCCESS',
    results: data,
  };
}

export function fetchNextPage(data) {
    return {
        type: 'FETCH_NEXT_PAGE',
        results: data,
    };
}

export function fetchSearchResults(searchString, page) {
    console.log("PAGE");
    console.log(page);
    if ( page ) {
        page = page+1;
    } else {
        page = 1;
    }
    searchString = searchString.replace(/ /g, '+');
    const url = `${config.api.url}/movie?api_key=${apiKey}&search=${searchString}&page=${page}`;
    return dispatch => 
    fetch(url)
        .then(res => res.json())
        .then(data => {
        if (data.statusCode && data.statusCode !== 200) {
            console.log(data.message);
        } else {
            if (page === 1) {
                dispatch(fetchSearchResultsSuccess(data.results));
            } else {
                dispatch(fetchNextPage(data.results));
            }
        }
        });
}