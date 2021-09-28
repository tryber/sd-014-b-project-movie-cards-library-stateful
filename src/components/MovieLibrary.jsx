import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  // código referência do Pull Request do Vinicius Santana : https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/138

onSearchTextChange = ({ target }) => {
  this.setState({
    searchText: target.value,
  });
}

  onBookmarkedChange = ({ target }) => {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    this.setState({
      selectedGenre: target.value,
    });
  }

  filteredMovie = (movie) => {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let checkMovie = true;
    const { title, subtitle, storyline, bookmarked, genre } = movie;
    if (bookmarkedOnly) checkMovie = bookmarked;
    if (!genre.includes(selectedGenre)) return false;
    if (title.includes(searchText)) return checkMovie;
    if (storyline.includes(searchText)) return checkMovie;
    if (subtitle.includes(searchText)) return checkMovie;
    return false;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies.filter(this.filteredMovie) } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
