const initialState = {
    searchString: '',
    results: [],
    page: 1,
    isLoading: false
};
  
export default function(state: any = initialState, action: Function) {
    if (action.type === 'UPDATE_SEARCH_STRING') {
        return {
            ...state,
            searchString: action.searchString,
            isLoading: true
        };
    } else if (action.type === 'SET_LOADING') {
        return {
            ...state,
            isLoading: action.loading
        }
    } else if (action.type === 'FETCH_RESULTS_SUCCESS') {
        return {
            ...state,
            results: action.results,
            page: 1,
            isLoading: false
        }
    } else if (action.type === 'FETCH_NEXT_PAGE') {
        return {
            ...state,
            results: [...state.results, ...action.results],
            page: state.page+1,
            isLoading: false
        }
    }
    return state;
}