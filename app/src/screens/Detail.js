import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'
import Image from '../components/Image'

class Detail extends Component {

constructor(props) {
    super(props)

    console.log(this.props.location.movie)
}

    render() {
        return (
            <div>
                <HeaderBar />
                    
                    <Image movie={this.props.location.movie} widthDivider={2} style={{display: 'block', margin: '10px auto'}} />
                    <div> {this.props.location.movie.title} </div>
                <FooterBar />
            </div>
        )
    }
}

export default Detail;