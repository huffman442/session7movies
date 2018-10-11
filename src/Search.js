import React, { Component } from 'react';

class Search extends Component {
    render(){
    return(
        <div>
                <select onChange={this.props.handleDropDown} type="text">
                    <option value="28">Action Movies</option>
                    <option value="27">Spooky Movies</option>
                    <option value="35">Silly Movies</option>
                    <option value="99">Documentaries</option>
                    <option value="18">Drama</option>
                    <option value="12">Adventure</option>
                    <option value="16">Animation</option>
                    <option value="80">Crime</option>
                    <option value="10751">Family</option>
                    <option value="14">Fantasy</option>
                    <option value="36">History</option>
                    <option value="10402">Music</option>
                    <option value="9648">Mystri</option>
                    <option value="10749">Romance</option>
                    <option value="878">Sci-Fy</option>
                    <option value="10770">Tv-Movie</option>
                    <option value="53">Thrilla</option>
                    <option value="10752">War</option>
                    <option value="37">Western</option>
                </select>
                <input onChange={this.props.handleSearchState} value={this.props.searchString} type="text"/>
                <button onClick={this.props.handleSearch}>submit</button>
            
        </div>        
    );
    }
}

export default Search;