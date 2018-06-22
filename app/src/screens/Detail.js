import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import Image from '../components/Image';
import '../Detail.css';

class Detail extends Component {

constructor(props) {
    super(props)

    console.log(this.props.location.movie)
}

    render() {
        return (
            <div>
                <HeaderBar />
                <div class="background">
                    <Image movie={this.props.location.movie} widthDivider={2} style={{display: 'block', margin: '10px auto'}} />
                    <h1> {this.props.location.movie.title} </h1>
                    <div class="detailInfo">
                        <p> <b>Overview: </b> <br/> {this.props.location.movie.overview} </p>
                        <p> <b>Rating: </b> <br/> {this.props.location.movie.vote_average}/10 on average out of {this.props.location.movie.vote_count} votes </p>
                        <p> <b>Realease Date: </b> <br/>{this.props.location.movie.release_date} </p>
                    </div>
                </div>
                <FooterBar />
            </div>
        )
    }
}

export default Detail;