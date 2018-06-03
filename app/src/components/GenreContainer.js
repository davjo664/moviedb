import React, { Component } from 'react';
import Image from './Image'

let genresMap = new Map([["Action",28],["Crime",80],["Drama",18],["Fantasy",14],["Adventure", 12], ["Animation", 16], ["Comedy",35]]);

class GenreContainer extends Component {

    constructor(props) {
        super(props);
        this.page = 1;
        this.state = {
            movies: []
        };
    }

    componentWillMount() {
        this.fetchMovies(this.props.genre);
    }


    fetchMovies(genre) {
        let genreId = genresMap.get(genre);
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=dc26abc8af32720ec9f3dc483dc521ae&with_genres=${genreId}&sort_by=vote_average.desc&page=${this.page}`)
        .then((res) => res.json())
        .then((posts) => {
            this.setState({
                ...this.state,
                movies: [...this.state.movies, ...posts.results]
            })
            this.page++;
        })
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
            console.log("Fetch more movies");
            this.fetchMovies(this.props.genre);
        }
    }

    render() {
        const renderMovies = this.state.movies.map((movie) => (
            <Image key={movie.id} poster_path={movie.poster_path}  />
        ));
        
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