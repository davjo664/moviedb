import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import config from '../../config/config';
import { connect } from 'react-redux';

import Detail from '../../screens/Detail';

class DetailContainer extends Component {

  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR");
    this.state = {movie: props.location.movie};
  }

  componentWillMount() {
      if (this.state.movie.movieid == null) {
        console.log("CHECK");
          //Came from Home screen, have to check if added in watchlist
          this.checkWatchlist(this.state.movie.id);
      }
  }

  checkWatchlist(movieId) {
    fetch(`${config.api.url}/watchlist`, {
        method: 'GET',
        credentials: "include",
    })
    .then((res) => {
        if (!res.ok) {
            if (res.status == 403) {
                //Not logged in
                console.log("NOT LOGGED IN");
            } else {
                console.log("ERROR:",res.statusText)
            }
        } else {
            res.json().then((data) => {
                if (data) {
                    var watchlistMovie = data.find(function(element) {
                        return element.movieid == movieId;
                    });
                    if (watchlistMovie) {
                      this.setState({movie: watchlistMovie})
                    }
                }
            })
        }
    })
}

addToWatchlist(movie) {
    var formData = new URLSearchParams();
    formData.append('movieid', movie.id);
    formData.append('title', movie.title);
    formData.append('overview', movie.overview);
    formData.append('vote_average', movie.vote_average);
    formData.append('vote_count', movie.vote_count);
    formData.append('release_date', movie.release_date);
    formData.append('poster_path', movie.poster_path);
    fetch(`${config.api.url}/watchlist`, {
        method: 'POST',
        credentials: "include",
        body: formData,
    })
    .then((res) => {
        if (!res.ok) {
          if (res.status == 403) {
            //Not logged in
            this.props.history.replace('/login');
          } else {
              console.log("ERROR:",res.statusText)
          }
        } else {
          res.json().then((watchlistMovie) => {
            if (watchlistMovie) {
             console.log("ADDED");
             console.log(watchlistMovie); 
            this.setState({movie: watchlistMovie})
                // var watchlistMovie = data.find(function(element) {
                //     return element.movieid == movieId;
                // });
                // if (watchlistMovie) {
                //   this.setState({movie: watchlistMovie})
                // }
            }
        })
        }
    })
}

removeFromWatchlist(movieId) {
  fetch(`${config.api.url}/watchlist/`+movieId, {
      method: 'DELETE',
      credentials: "include",
  })
  .then((res) => {
      if (!res.ok) {
        console.log("ERROR:",res.statusText)
      } else {
        var movieObj = this.state.movie;
        delete movieObj.watched;
        delete movieObj.movieid;
        delete movieObj._id;
        this.setState({movie: movieObj})
      }
  })
}

toggleWatched(_id, watched) {
  var formData = new URLSearchParams();
  formData.append('watched', watched);
  fetch(`${config.api.url}/watchlist/`+_id, {
      method: 'PUT',
      credentials: "include",
      body: formData,
  })
  .then((res) => {
      if (!res.ok) {
            console.log("ERROR:",res.statusText)
      } else {
          var watchlistMovie = this.state.movie;
          watchlistMovie.watched = watched;
          this.setState({movie: watchlistMovie})
      }
  })
}

  render() {
    return (
      <Detail
        movie={this.state.movie}
        addToWatchlist={this.addToWatchlist.bind(this)}
        removeFromWatchlist={this.removeFromWatchlist.bind(this)}
        toggleWatched={this.toggleWatched.bind(this)}
      />
    );
  }
}

export default withRouter(DetailContainer)