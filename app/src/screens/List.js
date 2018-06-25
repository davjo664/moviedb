import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'
import Image from '../components/Image'

class List extends Component {

    constructor(props) {
        super(props);

        // this.imgPath = `https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`;
        this.state = { movies: [], watched: true }
        // this.handleClick = this.handleClick.bind(this);
        
    }

    componentWillMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=dc26abc8af32720ec9f3dc483dc521ae&with_genres=${28}&sort_by=vote_average.desc&page=${3}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.statusCode && data.statusCode != 200) {
                console.log(data.message);
            } else {
                let movies = data.results
                this.setState( {movies} );
            }
        })
    }

    handleClick(movie) {
        this.props.history.push({
            pathname: "/detail",
            movie: movie});
    }

    render() {
        let renderMovies;
        const watched = this.state.watched;

        if (this.state.movies) {
            renderMovies = this.state.movies.map((movie) => (
                <div style={{width: (window.innerWidth-40)/3+10, 
                        float: 'left',
                        position: 'relative'}} 
                        onClick={this.handleClick.bind(this, movie)}>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                        key={movie.id} movie={movie} 
                        style={{zIndex: 0,
                            width: (window.innerWidth-40)/3, 
                            height: (window.innerWidth-40)*4/9, 
                            margin: 5}} />
                    { watched ? (
                        <div style={{zIndex:2, position: 'absolute',
                                width: (window.innerWidth-40)/6, 
                                height: (window.innerWidth-40)/6, 
                                margin: 5, 
                                left: (window.innerWidth-40)/12,
                                top: (window.innerWidth-40)*2/9-(window.innerWidth-40)/12,
                                background: 'rgba(0, 0, 0, 0.5)'}} > 
                            <img src="https://png.icons8.com/material/96/ffffff/checkmark.png" 
                                style={{width: (window.innerWidth-40)/6, 
                                height: (window.innerWidth-40)/6}}/>
                        </div>
                    ) : (
                        <div/>
                    )}
                    
                </div>
            ));
        }

        return (
            <div>
                <HeaderBar />
                    <div style={{position: 'relative'}}>
                        <div id={this.props.genre} style={{ overflow: 'scroll', padding: 5, height: window.innerHeight - 120}}> 
                            {renderMovies}
                        </div>
                    </div>
                <FooterBar />
            </div>
        )
    }
}

export default List;