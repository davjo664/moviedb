import React, { Component } from 'react';
import DetailHeader from '../components/DetailHeader';
import Image from '../components/Image';
import '../Detail.css';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Detail extends Component {

    handleClick() {
        // do api call
        if (this.props.movie._id) {
            this.props.removeFromWatchlist(this.props.movie._id);
        } else {
            this.props.addToWatchlist(this.props.movie);
        }
    }

    handleChange(event) {
        this.props.toggleWatched(this.props.movie._id, event.target.checked);
    }

    render() {
        console.log(this.props.movie.movieid);
        return (
            <div>
                <DetailHeader />
                <div className="background" style={{height: window.innerHeight - 75 }} >
                    <Image movie={this.props.movie} widthDivider={2} style={{display: 'block', margin: '10px auto', boxShadow: '0px 3px 10px rgba(0,0,0,0.7)'}} />
                    <Card>
                        <CardContent>
                            <Typography variant="display1">{this.props.movie.title}</Typography>
                            {/* <Image movie={this.props.location.movie} widthDivider={2} style={{display: 'block', margin: '10px auto'}} /> */}
                            <div className="detailInfo">
                                <Typography> <b>Overview: </b> <br/> <h4 style={{color: 'grey'}}>{this.props.movie.overview}</h4> </Typography>
                                <Typography> <b>Rating: </b> <br/> <h4 style={{color: 'grey'}}>{this.props.movie.vote_average}/10 on average out of {this.props.movie.vote_count} votes</h4> </Typography>
                                <Typography> <b>Realease Date: </b> <br/> <h4 style={{color: 'grey'}}>{this.props.movie.release_date}</h4> </Typography>
                            </div>
                            <Button 
                                color= {this.props.movie.movieid ? "secondary" : "primary"}
                                variant="contained" 
                                style={style}
                                onClick={this.handleClick.bind(this)}
                                > {this.props.movie.movieid ? "Remove from" : "Add to"} list</Button>
                            { this.props.movie.movieid && 
                                <FormControlLabel control={<Checkbox
                                    checked={this.props.movie.watched}
                                    onChange={this.handleChange.bind(this)}
                                    value="watched"
                                    />} label={this.props.movie.movieid ? "watched?" : ""} />
                            }
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

const style = {
    margin: 5,
};

export default Detail;