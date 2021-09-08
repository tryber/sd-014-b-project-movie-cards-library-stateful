import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      moviess: [],
    };
  }

  onSearchTextChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre, moviess } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onSearchTextChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSearchTextChange }
        />
        <MovieList movies={ moviess } />
        <AddMovie onClick={ this.funcCall } />
      </>
    );
  }
}

/* MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}; */

export default MovieLibrary;
