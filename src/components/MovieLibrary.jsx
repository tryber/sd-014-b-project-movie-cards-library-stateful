import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './searchFormsComponents/SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.fillMovies = this.fillMovies.bind(this);
  }

  handleChange({ target: { name, value, checked } }) {
    // if (name === 'bookmarkedOnly') console.log('Check');
    this.setState({
      [name]: (name === 'bookmarkedOnly' ? checked : value),
    });
  }

  fillMovies(prop) {
    const { movies } = this.state;
    prop.forEach((item) => movies.push(item));
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre, movies: moviesArray } = this.state;
    if (moviesArray.length < movies.length) this.fillMovies(movies);
    console.log(this.state);

    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleChange }
      />
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
