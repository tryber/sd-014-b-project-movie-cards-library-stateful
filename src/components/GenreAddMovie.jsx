import React from 'react';
import PropTypes from 'prop-types';

class GenreAddMovie extends React.Component {
  render() {
    const { value, addMovie } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          data-testid="genre-input"
          onChange={ addMovie }
          name="genre"
          value={ value }
          id="genre-input"
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

GenreAddMovie.propTypes = {
  value: PropTypes.string,
  addMovie: PropTypes.func,
}.isRequired;

export default GenreAddMovie;
