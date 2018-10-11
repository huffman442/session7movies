import React, { Component } from 'react';
import './App.css';

class Movie extends Component {
    constructor(props)
    {
      super(props)
    }
    render() {
    return (
        <div className="App">
            <div className="backdrop" style={{backgroundImage: "url(https://image.tmdb.org/t/p/original" + this.props.individualMovie.backdrop_path+")"}}>
                <div className="movieBackground">
                    <div className="Movies">
                        <h2>{this.props.individualMovie.title}</h2>
                        <h3>Budget: ${this.props.individualMovie.budget}</h3>
                        <h3>Release Date: {this.props.individualMovie.release_date}</h3>
                        <p>Overview: {this.props.individualMovie.overview}</p>
                        <p>Rating: {this.props.individualMovie.vote_average}</p>
                    </div>
                    <button onClick={this.props.goBack}>Back</button>
                </div>
            </div>
        </div>
        );
        }
        }
    export default Movie;
