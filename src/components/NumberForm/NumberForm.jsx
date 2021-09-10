import React from 'react';
import PropTypes from 'prop-types';

class NumberForm extends React.Component {
  render() {
    const { id, value, onChange, children } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        { children }
        <input
          type="number"
          id={ id }
          onChange={ onChange }
          value={ value }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}

NumberForm.propTypes = {
  id: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.string,
}.isRequired;

export default NumberForm;
