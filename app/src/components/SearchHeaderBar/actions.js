export function updateSearchString(searchString: String) {
    return {
        type: 'UPDATE_SEARCH_STRING',
        searchString,
    };
}