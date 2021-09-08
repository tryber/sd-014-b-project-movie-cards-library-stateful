import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import data from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectGenre: 'Todos',
      movies: data,
    };
  }

  onSearchTextChange = (event) => {
    const { value, name } = event.target;
    const { searchText, movies } = this.state;

    const filtering = data.filter((element) => {
      return element.title.toLowerCase().includes(searchText)
      || element.subtitle.toLowerCase().includes(searchText)
      || element.storyline.toLowerCase().includes(searchText);
    });

    this.setState({
      [name]: value,
      movies: filtering,
    });
  }

  onBookmarkedChange = (event) => {
    
  }

  handleGenreChage = (event) => {
    this.setState({ selectGenre: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectGenre={ selectGenre }
          onSelectedGenreChange={ this.handleGenreChage }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
