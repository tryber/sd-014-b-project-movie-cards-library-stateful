import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreAddMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="121" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre-input"
          data-testid="genre-input"
          onChange={ handleChange }
          value={ value }
        >
          <option
            value="action"
            data-testid="genre-option"
          >
            Ação
          </option>
          <option
            value="comedy"
            data-testid="genre-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            data-testid="genre-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}
GenreAddMovie.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default GenreAddMovie;
