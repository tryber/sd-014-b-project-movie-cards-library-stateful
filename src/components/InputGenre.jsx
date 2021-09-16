import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          type="text"
          value={ value }
          data-testid="genre-input"
          onChange={ handleChange }
          name="genre"
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

InputGenre.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
export default InputGenre;
