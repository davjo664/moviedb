import React, { Component } from 'react';

import SearchContainer from '../components/SearchContainer'
import SearchHeader from '../components/SearchHeader';

class Search extends Component {
    render() {
        return (
            <div>
                <SearchHeader 
                updateSearchString={this.props.updateSearchString}
                fetchSearchResults={this.props.fetchSearchResults}
                searchString={this.props.searchString}
                />
                <div style={{overflow: 'hidden'}}>
                    <h3 style={{marginLeft: 10, marginBottom: 4}}> Results: </h3>
                    <div style={{height: window.innerWidth/4*(4/3) + 10}}>
                        <SearchContainer 
                        genre='search' 
                        results={this.props.results}
                        page={this.props.page}
                        isLoading={this.props.isLoading}
                        setLoading={this.props.setLoading}
                        fetchSearchResults={this.props.fetchSearchResults}
                        searchString={this.props.searchString}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;