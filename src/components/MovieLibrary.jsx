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
    const { searchText } = this.state;

    const filtering = data.filter((element) => element.title.toLowerCase()
      .includes(searchText)
    || element.subtitle.toLowerCase().includes(searchText)
    || element.storyline.toLowerCase().includes(searchText));

    this.setState({
      [name]: value,
      movies: filtering,
    });
  }

  onBookmarkedChange = (event) => {
    const { name, checked } = event.target;
    const { movies } = this.state;
    const filtering = movies.filter((element) => element === checked);

    this.setState({
      [name]: checked,
      movies: filtering,
    });
  }

  onSelectedGenreChange = (event) => {
    const { name, value } = event.target;

    const filtering = data.filter((element) => (value === ''
      ? element : element.genre === value));

    this.setState({
      [name]: value,
      movies: filtering,
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectGenre,
      movies,
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectGenre={ selectGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          rating={ rating }
        />
      </div>
    );
  }
}

export default MovieLibrary;
