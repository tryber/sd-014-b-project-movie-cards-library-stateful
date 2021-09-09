import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import MovieList from './MovieList';
// import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    // const { title, subtitle, storyline, rating, imagePath, genre } = this.props;
    return (
      <MovieCard />
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: ({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.number,
//     imagePath: PropTypes.string,
//   }).isRequired,
// };

export default MovieLibrary;
