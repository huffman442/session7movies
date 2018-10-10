import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props)
  {
    super(props)

    this.state = {
      moviedata: {
        results: [],
      }
    }

    Axios
      .get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262")
      .then((response) => {
        this.setState({moviedata: response.data});
      })

    this.gotoPageTwo = this.gotoPageTwo.bind(this)
  }

  gotoPageTwo()
  {
    Axios
    .get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262&page=2")
    .then((response) => {
      this.setState({moviedata: response.data});
    })
  }

  render() {
    return (
      <div className="App">
        <h2 onClick={this.gotoPageTwo}>Load them movies!</h2>
        {this.state.moviedata.results.map( (movie) => {
          return (
           <div>
             <h1>{movie.title}</h1>
             <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
            </div>
           )
        } )}
      </div>
    );
  }
}

export default App;

