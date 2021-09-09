import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      searchText: '',
      /* bookmarkedOnly: false,
      selectedGenre: 'Todos', */
    };
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    const { searchText /* bookmarkedOnly, selectedGenre */ } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchBar={ searchText } />
        <AddMovie movies={ movies } />
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
