import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { genreValue, handleChange } = this.props;
    return (
      <label htmlFor="genreId" data-testid="genre-input-label">
        Gênero
        <select
          name="rating"
          id="genreId"
          data-testid="genre-input"
          onChange={ handleChange }
          value={ genreValue }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comedia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genreValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Genre;
