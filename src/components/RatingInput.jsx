import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { type, value, handleClick, data, label } = this.props;
    return (
      <label data-testid={ `${data}-label` } htmlFor={ type }>
        {label}
        <input
          type="number"
          name={ type }
          value={ value }
          onChange={ handleClick }
          data-testid={ data }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
};

export default RatingInput;
