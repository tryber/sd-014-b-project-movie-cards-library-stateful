import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick(state) {
    console.log(state);
  }

  handleCheckbox = (name, checked) => {
    if (checked) {
      this.setState({ [name]: true });
    } else { this.setState({ [name]: false }); }
  }

  handleClick = (event) => {
    const { value, name, type, checked } = event.target;
    if (type === 'checkbox') {
      this.handleCheckbox(name, checked);
    } else { this.setState({ [name]: value }); }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(this.state);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
          searchText={ searchText }
          callBack={ this.handleClick }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleClick }
          onBookmarkedChange={ this.handleClick }
          onSelectedGenreChange={ this.handleClick }/>
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick }/>
      </div>
    );
  }
}

export default MovieLibrary;
