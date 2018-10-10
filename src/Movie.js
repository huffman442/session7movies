import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class Movie extends Component {
    constructor(props)
    {
      super(props)
    }
    render() {
    
    
      return (
        <div className="App">
        <div className="Background">
           
             <div className="Movies">
               <h3>Budget: {this.props.individualMovie.budget}</h3>
            </div>
           
          </div>
          
        </div>
      );
    }
  }
  
  export default Movie;
