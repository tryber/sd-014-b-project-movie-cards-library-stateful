import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {
  render() {
    const { type, value, handleClick, data, label } = this.props;
    return (
      <label data-testid={ `${data}-label` } htmlFor={ type }>
        { label }
        <select
          name={ type }
          data-testid={ data }
          value={ value }
          onChange={ handleClick }
        >
          <option data-testid="genre-option" value="action"> Ação </option>
          <option data-testid="genre-option" value="comedy"> Comédia </option>
          <option data-testid="genre-option" value="thriller"> Suspense </option>
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default SelectInput;
