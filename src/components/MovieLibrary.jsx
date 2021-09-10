import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       subtitle: PropTypes.string.isRequired,
//       storyline: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//       imagePath: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default MovieLibrary;
