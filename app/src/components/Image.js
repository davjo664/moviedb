// Component to hide movies without poster image

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Image extends Component {
    constructor(props) {
        super(props);

        this.imgPath = `https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`;

        const windowWidth = window.innerWidth;
        this.width = this.props.widthDivider ? windowWidth / this.props.widthDivider : windowWidth/4;
        this.height = this.width*(4/3); //4:3 ratio

        this.style = this.props.style ? this.props.style : {
            marginRight:10,
            boxShadow: '0px 3px 10px rgba(0,0,0,0.7)',
        };

        this.state = {
            error: false,
            loading: true
        };
    }

    onLoad() {
        this.setState({loading: false});
    }

    onError() {
        this.setState({error: true});
    }

    handleClick() {
        console.log("handle CLick");
        this.props.history.push({
            pathname: "/detail",
            movie: this.props.movie});
    }
      
    render() {
        if (!this.state.error) {
            return <img className={this.state.loading ? 'loading' : ''} 
                    src={this.imgPath}
                    alt={'Movie Poster'}
                    onLoad={() => this.onLoad()} 
                    onError={() => this.onError()} 
                    width={this.width} 
                    height={this.height} 
                    style={this.style} 
                    onClick={this.handleClick.bind(this)} />
        }
        return null;
    }
}

export default withRouter(Image);