import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        Renderiza danado
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
