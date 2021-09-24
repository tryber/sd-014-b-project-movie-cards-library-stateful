import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="text" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre"
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
            value="Thriller"
            data-testid="genre-option"
          >
            Suspense
          </option>

        </select>
      </label>
    );
  }
}

InputGenre.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChance: PropTypes.func,
}).isRequired;

export default InputGenre;
