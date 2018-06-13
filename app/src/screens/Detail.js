import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'

class Detail extends Component {

    render() {
        return (
            <div>
                <HeaderBar />
                    <div> Detail View {this.props.location.movie.title} </div>
                <FooterBar />
            </div>
        )
    }
}

export default Detail;