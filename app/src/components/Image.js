import imageFile from '../loading.gif'
// Component to hide movies without poster image

import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props);

        this.imgPath = `https://image.tmdb.org/t/p/w300/${this.props.poster_path}`;

        const windowWidth = window.innerWidth;
        this.width = windowWidth/4;
        this.height = this.width*(4/3); //4:3 ratio

        this.style = {
            marginRight:10
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
      
    render() {
        if (!this.state.error) {
            return <img className={this.state.loading ? 'loading' : ''} src={this.imgPath} onLoad={() => this.onLoad()} onError={() => this.onError()} width={this.width} height={this.height} style={this.style} /> 
        }
        return null;
    }
}

export default Image;