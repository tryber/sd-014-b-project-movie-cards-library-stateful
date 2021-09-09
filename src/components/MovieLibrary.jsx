import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      // movies: { movies } = this.props,
    };
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//     movies: PropTypes.arrayOf(SearchBar).isRequired,
// }

export default MovieLibrary;
