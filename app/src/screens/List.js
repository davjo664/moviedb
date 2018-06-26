import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'
import Image from '../components/Image'


class List extends Component {

    constructor(props) {
        super(props);

        // this.imgPath = `https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`;
        this.state = { movies: [], watched: true }
        // this.handleClick = this.handleClick.bind(this);
        console.log("LIST");
        console.log(this.props.movie);
        
    }

    componentWillMount() {
        console.log("DID MOUNT");
        this.props.fetchMovies(this.props.history);
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
        // this.props.fetchMovieDetail(movie, this.props.history);
    }

    handleLogout() {
        // switch to login screen
    }

    render() {
        let renderMovies;
        // const watched = this.state.movies;

        if (this.props.movies) {
            renderMovies = this.props.movies.map((movie) => (
                <div style={{width: (window.innerWidth-40)/3+10, 
                        float: 'left',
                        position: 'relative'}} 
                        onClick={this.handleClick.bind(this, movie)}>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                        key={movie.id} movie={movie} 
                        style={{zIndex: 0,
                            width: (window.innerWidth-40)/3, 
                            height: (window.innerWidth-40)*4/9, 
                            margin: 5,
                            boxShadow: '0px 2px 8px rgba(0,0,0,0.5)'}} />
                    { movie.watched ? (
                        <div style={{position: 'absolute',
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
                            {/* <div style={{width: window.innerWidth}}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    style={style}
                                    onClick={this.handleLogout}
                                    > Logout </Button>
                            </div> */}
                        </div>
                    </div>
                    <div style={{position: 'absolute',
                            width: window.innerWidth,
                            bottom: 65,
                            display: 'flex',
                            justifyContent: 'center'}}>
                        <Button
                            color="secondary"
                            variant="contained"
                            style={style}
                            onClick={this.handleLogout}
                            > Logout </Button>
                    </div>
                <FooterBar />
            </div>
        )
    }
}

const style = {
    margin: 5,
    width: (window.innerWidth * 0.5)
};

export default List;