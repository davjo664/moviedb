import React, { Component } from 'react';

import GenreContainer from '../components/GenreContainer'
const genres = ["Drama","Action","Fantasy","Crime"];

class Home extends Component {
    render() {
        const movieGenres = genres.map((genre) => (
            <div>
                <h4 style={{marginLeft: 10, marginBottom: 4}}> {genre} </h4>
                <div style={{height: window.innerWidth/4*(4/3)}}>
                    <GenreContainer genre={genre} />
                </div>
            </div>
        ))
        return (
            <div>
                {movieGenres}
            </div>
        )
    }
}

export default Home;
