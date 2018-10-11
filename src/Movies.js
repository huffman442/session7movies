import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';

class Movies extends Component {
  
  render() {
    return (
        <div className="App">
            <div className="Background">
            <Search searchString={this.props.searchString} handleSearchState={this.props.handleSearchState} handleSearch={this.props.handleSearch} handleDropDown={this.props.handleDropDown}></Search>
                {this.props.moviedata.results.map( (movie) => {
                return (
                    <div className="Movies">
                        <h3>{movie.title}</h3>
                        <img onClick={() => this.props.gotoMovieDeets(movie.id)} src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} />
                    </div>
                )
                } )}
            </div>
        </div>
    );
  }
}

export default Movies;
