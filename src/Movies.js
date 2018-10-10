import React, { Component } from 'react';
import './App.css';

class Movies extends Component {
  
  render() {
  
  
    return (
      <div className="App">
      <div className="Background">
         {this.props.moviedata.results.map( (movie) => {
          return (
           <div className="Movies">
             <h3>{movie.title}</h3>
             
                <img onClick={() => this.props.gotoMovieDeets(movie.id)} src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} />
                <div className="MoviesInfo">
                Overview: {movie.overview}<br/>
                Rating: {movie.vote_average}
                {console.log(movie.id)}
                
            
             </div>             
            </div>
           )
        } )}
        </div>
        
      </div>
    );
  }
}

export default Movies;
