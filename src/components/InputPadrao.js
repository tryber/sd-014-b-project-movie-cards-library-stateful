import React from 'react';
import PropTypes from 'prop-types';

class InputPadrao extends React.Component {
  render() {
    const { name, description, id, handleChange, value, dataid, type } = this.props;
    return (
      <label data-testid={ dataid } htmlFor={ name }>
        {description}
        <input
          name={ name }
          data-testid={ id }
          value={ value }
          onChange={ handleChange }
          type={ type }
        />
      </label>
    );
  }
}

InputPadrao.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default InputPadrao;
