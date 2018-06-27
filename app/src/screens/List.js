import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';


class List extends Component {

    componentWillMount() {
        this.props.fetchMovies(this.props.history);
    }

    handleClick(movie) {
        this.props.history.push({
            pathname: "/detail",
            movie: movie});
    }

    handleLogout() {
        this.props.logOut(this.props.history);
    }

    render() {
        let renderMovies;
        if (this.props.movies) {
            renderMovies = this.props.movies.map((movie) => (
                <div style={{width: (window.innerWidth-40)/3+10, 
                        float: 'left',
                        position: 'relative'}} 
                        onClick={this.handleClick.bind(this, movie)}>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                        key={movie.id} 
                        movie={movie}
                        alt={'Movie poster'}
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
                                height: (window.innerWidth-40)/6}}
                                alt={'Movie was watched'}/>
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
                            {renderMovies.length > 0 ? renderMovies : 'No movies added to Watchlist'}
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
                            onClick={this.handleLogout.bind(this)}
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