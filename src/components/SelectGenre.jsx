import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { describe, id, name, value, testid, testidLabel, handleChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ testidLabel }>
        { describe }
        <select
          className="form-select"
          id={ id }
          name={ name }
          value={ value }
          data-testid={ testid }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
          <option data-testid="select-option" value="fantasy">Fantasia</option>
          <option data-testid="select-option" value="Science fiction">
            Ficção Ciêntifica
          </option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  describe: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  testidLabel: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectGenre;
