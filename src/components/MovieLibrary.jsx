import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
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

  handleSearchText = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      searchText: value,
    }));
  }

  handleBookMakerd = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      bookmarkedOnly: value,
    }));
  }

  handleGenreChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      selectedGenre: value,
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookMakerd }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenreChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
