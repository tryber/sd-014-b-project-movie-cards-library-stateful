import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {

  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          handleChange={ handleChange }
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

InputGenre.propTypes = {
  genre: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputGenre;
