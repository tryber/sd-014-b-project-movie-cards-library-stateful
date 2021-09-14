import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends Component {
  render() {
    const { name, inputId, labelId, value, handleChange, description } = this.props;
    return (
      <label htmlFor={ inputId } data-testid={ labelId }>
        { description }
        <select
          name={ name }
          data-testid={ inputId }
          value={ value }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  name: PropTypes.string,
  inputId: PropTypes.string,
  labelId: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  description: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default SelectGenre;
