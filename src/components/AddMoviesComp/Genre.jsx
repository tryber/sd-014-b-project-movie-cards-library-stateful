import PropTypes from 'prop-types';
import React from 'react';

class Genre extends React.Component {
  render() {
    const { genre, inputChange } = this.props;
    return (
      <label htmlFor="selectAddMovie" data-testid="genre-input-label">
        Gênero
        <select
          id="selectAddMovie"
          onChange={ inputChange }
          name="genre"
          value={ genre }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string,
  inputChange: PropTypes.func,
}.isRequired;

export default Genre;
