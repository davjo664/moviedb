import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import Image from '../components/Image';
import '../Detail.css';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Detail extends Component {

    constructor(props) {
        super(props)

        this.state = { isOnWatchlist: false, watched: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        console.log(this.props.location.movie)
    }

    componentWillMount() {
        let isOnWatchlist = true;
        let watched = true;
        this.setState({ isOnWatchlist, watched });
    }

    handleClick() {
        // do api call
        const isOnWatchlist = !this.state.isOnWatchlist
        this.setState({isOnWatchlist})
    }

    handleChange() {
        const watched = !this.state.watched
        this.setState({watched})
    }

    render() {
        return (
            <div>
                <HeaderBar />
                <div class="background" style={{background: 'linear-gradient(to bottom, rgba(241, 241, 241, 1), rgba(201, 201, 201, 1))',
                        height: window.innerHeight - 135 }} >
                    <Image movie={this.props.location.movie} widthDivider={2} style={{display: 'block', margin: '10px auto', boxShadow: '0px 3px 10px rgba(0,0,0,0.7)'}} />
                    <Card>
                        <CardContent>
                            <Typography variant="display1"> {this.props.location.movie.title} </Typography>
                            {/* <Image movie={this.props.location.movie} widthDivider={2} style={{display: 'block', margin: '10px auto'}} /> */}
                            <div class="detailInfo">
                                <Typography> <b>Overview: </b> <br/> {this.props.location.movie.overview} </Typography>
                                <Typography> <b>Rating: </b> <br/> {this.props.location.movie.vote_average}/10 on average out of {this.props.location.movie.vote_count} votes </Typography>
                                <Typography> <b>Realease Date: </b> <br/>{this.props.location.movie.release_date} </Typography>
                            </div>
                            <Button 
                                color= {this.state.isOnWatchlist ? "secondary" : "primary"}
                                variant="contained" 
                                style={style}
                                onClick={this.handleClick}
                                > {this.state.isOnWatchlist ? "Remove from" : "Add to"} list</Button>
                            <FormControlLabel control={<Checkbox
                                checked={this.state.watched}
                                onChange={this.handleChange}
                                value="watched" 
                                style={style}
                                />} label="watched?" />
                        </CardContent>
                    </Card>
                </div>
                <FooterBar />
            </div>
        )
    }
}

const style = {
    margin: 5,
};

export default Detail;