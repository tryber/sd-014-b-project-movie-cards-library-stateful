import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import PropTypes from 'prop-types';
import MovieList from './MovieList';



class MovieLibrary extends React.Component {
    constructor() {
        super();
        this.state = {
          searchText: '',
          bookmarkedOnly: false,
          selectedGenre: '',
        }
    }
      
  render() {
      const { movies } = this.props;
    return (
        <section>
            <SearchBar />
            <MovieList movies={ movies } />
            <AddMovie />
        </section>
    )
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default MovieLibrary;
