import React from 'react';
import Image from './Image'
import GenreContainer from './GenreContainer';

export default class SearchContainer extends GenreContainer {

    componentWillMount() {

    }

    fetchMovies() {
        if (this.props.searchString && !this.props.isLoading) {
            this.props.setLoading(true);
            this.props.fetchSearchResults(this.props.searchString, this.props.page);
        }
    }

    render() {
        let renderMovies;
        if (this.props.results) {
            renderMovies = this.props.results.map((movie) => (
                <Image key={movie.id} movie={movie}  />
            ));
        }
        
        return (
            <div style={{position: 'relative'}}>
                <div style={{zIndex:1, 
                    left:window.innerWidth-50, 
                    position: 'absolute',
                    height: window.innerWidth/4*(4/3) + 10, 
                    width: 50,
                    background: 'linear-gradient(to left,rgb(255, 255, 255) 20%, rgba(58, 79, 202, 0) 80%)'}} />
                <div id={this.props.genre} 
                        style={{whiteSpace: 'nowrap', 
                        overflow: 'auto', 
                        paddingRight: 20, 
                        marginLeft: 10, 
                        height: window.innerWidth/4*(4/3) + 10}}> 
                    {renderMovies && renderMovies.length > 0 ? renderMovies : "No movies found"}
                </div>
            </div>
        )
    }
}
