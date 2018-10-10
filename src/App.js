import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Movies from './Movies.js';
import Movie from './Movie.js';

class App extends Component {
  constructor(props)
  {
    
    super(props)
    this.gotoMovieDeets=this.gotoMovieDeets.bind(this);
    this.state = {
      currentPage: "Movies",
      moviesResults:{
        results: []
      },
      individualMovie: []
    }
    
    Axios
      .get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262")
      .then((response) =>  {
        this.setState({moviesResults: response.data});
      });
  }
  gotoMovieDeets(id)
    {
      Axios
      .get("https://api.themoviedb.org/3/movie/"+ id +"?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US")
      .then((response) => {
        this.setState({individualMovie: response.data, currentPage: "Movie"});
      })
    }
  
  render() {
    var movietag;
   
    if (this.state.currentPage === "Movies")
    {
      movietag = <Movies moviedata={this.state.moviesResults} gotoMovieDeets={this.gotoMovieDeets}></Movies>
    }
    else
    {
      movietag = <Movie individualMovie={this.state.individualMovie}></Movie>
    }

    /*movietag = <Movie></Movie>;*/
  
  
  
    return (
      <div className="App">
      {movietag}
        
      </div>
    );
  }
}

export default App;

