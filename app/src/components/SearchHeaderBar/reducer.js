const initialState = {
    searchString: '',
};
  
export default function(state: any = initialState, action: Function) {
    if (action.type === 'UPDATE_SEARCH_STRING') {
        return {
            ...state,
            searchString: action.searchString,
        };
    }
    return state;
}