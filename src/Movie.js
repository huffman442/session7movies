import React, { Component } from 'react';
import './App.css';

class Movie extends Component {
    render() {
        const movie=this.props.individualMovie;
    return (
        <div className="App">
            <div className="backdrop" style={{backgroundImage: "url(https://image.tmdb.org/t/p/original" + this.props.individualMovie.backdrop_path+")"}}>
                <div className="movieBackground">
                    <div className="Movies">
                        <h2>{movie.title}</h2>
                        <h3>Budget: ${movie.budget}</h3>
                        <h3>Release Date: {movie.release_date}</h3>
                        <p>Overview: {movie.overview}</p>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                    <button onClick={this.props.goBack}>Back</button>
                </div>
            </div>
        </div>
        );
        }
        }
    export default Movie;
