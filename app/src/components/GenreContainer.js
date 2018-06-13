import React, { Component } from 'react';
import Image from './Image'

class GenreContainer extends Component {

    constructor(props) {
        super(props);
        this.page = 1;
    }

    fetchMovies(genre, page) {
        console.log("isLoading");
        console.log(this.props.isLoading);
        if (!this.props.isLoading) {
            console.log("Fetch more movies");
            this.props.setLoading(true);
            this.props.fetchMoviesByGenre(genre, page);
        }
    }

    componentDidMount() {
        document.getElementById(this.props.genre).addEventListener('scroll', this.handleScroll.bind(this));
    }
  
    componentWillUnmount() {
        document.getElementById(this.props.genre).removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll(event) {
     
        let scrollPos = event.srcElement.scrollLeft;
        let imgWidth = event.srcElement.firstChild.width;
        let containerWidth = event.srcElement.scrollWidth;
        let windowWidth = window.innerWidth;
        if (scrollPos > containerWidth-windowWidth-imgWidth*2) {
            this.fetchMovies(this.props.genre, 2);
        }
    }

    render() {
        let renderMovies;
        if ( this.props.movies ) {
            renderMovies = this.props.movies.map((movie) => (
                <Image key={movie.id} movie={movie}  />
            ));
        }
        
        return (
            <div style={{position: 'relative'}}>
                <div style={{zIndex:1, left:window.innerWidth-50, position: 'absolute',height: window.innerWidth/4*(4/3), width: 50,background: 'linear-gradient(to left,rgb(255, 255, 255) 20%, rgba(58, 79, 202, 0) 80%)'}} />
                <div id={this.props.genre} style={{whiteSpace: 'nowrap', overflow: 'auto', paddingRight: 20, marginLeft: 10}}> 
                    {renderMovies}
                </div>
            </div>
        )
    }
}

export default GenreContainer;