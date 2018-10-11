import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Movies from './Movies.js';
import Movie from './Movie.js';

class App extends Component {
  constructor(props)
  {
    
    super(props)
    this.gotoMovieDeets=this.gotoMovieDeets.bind(this);
    this.goBack=this.goBack.bind(this);
    this.handleDropDown=this.handleDropDown.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
    this.handleSearchState=this.handleSearchState.bind(this);
    this.state = {
      currentPage: "Movies",
      currentMovies: "Default",
      searchString: "",
      genreid: 28,
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
  goBack(){
    this.setState({currentPage: "Movies"});
  }
  handleDropDown(event){
    Axios
      .get("https://api.themoviedb.org/3/discover/movie?with_genres="+ event.target.value +"&sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262")
      .then((response) =>  {
        this.setState({moviesResults: response.data});
      });
  }
  handleSearchState(event){
    this.setState({searchString: event.target.value})
  }
  handleSearch(){
    Axios
      .get("https://api.themoviedb.org/3/search/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&query=" + this.state.searchString + "&page=1&include_adult=false")
      .then((response) =>  {
        this.setState({moviesResults: response.data});
      });

  }
  render() {
    var movietag;
   
    if (this.state.currentPage === "Movies")
    {
      movietag = <Movies
                   handleSearchState={this.handleSearchState}
                   searchString={this.state.searchString}
                   handleSearch={this.handleSearch}
                   handleDropDown={this.handleDropDown}
                   moviedata={this.state.moviesResults}
                   gotoMovieDeets={this.gotoMovieDeets}
                  />
    }
    else
    {
      movietag = <Movie individualMovie={this.state.individualMovie} goBack={this.goBack}></Movie>
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