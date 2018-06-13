import React, { Component } from 'react';

import GenreContainer from '../components/GenreContainer'
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'

const initialGenres = ["Drama","Action","Fantasy", "Crime"];
const allGenres = ["Drama","Action","Fantasy", "Crime", "Adventure", "Animation", "Horror", "Western", "Comedy"];

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById('home').addEventListener('scroll', this.handleScroll.bind(this));
        if (this.props.genres.length == 0) {
            // Load inital genres
            initialGenres.forEach((genre) => {
                this.props.fetchMoviesByGenre(genre, 1);
            }) 
        }
    }
  
    componentWillUnmount() {
        document.getElementById('home').removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll(event) {

        
     
        let scrollPos = event.srcElement.scrollTop;

        if (event.srcElement.scrollHeight > event.srcElement.clientHeight+scrollPos-window.innerWidth/4*(4/3)) {
            console.log("Fetch new category");
            console.log(this.props.isLoading);
            if (allGenres.length > this.props.genres.length && !this.props.isLoading) {
                this.props.setLoading(true);
                this.props.fetchMoviesByGenre(allGenres[this.props.genres.length], 1);
            }
        }
    }

    render() {
        const movieGenres = this.props.genres.map((genre) => {
        return (
            <div style={{overflow: 'hidden'}}>
                <h4 style={{marginLeft: 10, marginBottom: 4}}> {genre} </h4>
                <div style={{height: window.innerWidth/4*(4/3)}}>
                    <GenreContainer genre={genre} movies={this.props.movies[genre]} fetchMoviesByGenre={this.props.fetchMoviesByGenre} isLoading={this.props.isLoading} setLoading={this.props.setLoading} />
                </div>
            </div>
        )
    }
    
    )
        return (
            // Footer and header have both 56px height
            <div>
                <HeaderBar />
                <div id='home' style={{overflow: 'scroll', height: window.innerHeight-56*2}}> 
                    {movieGenres}
                </div>
                <FooterBar />
            </div>
        )
    }
}

export default Home;
