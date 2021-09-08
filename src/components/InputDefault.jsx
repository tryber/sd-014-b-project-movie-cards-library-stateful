import React from 'react';
import PropTypes from 'prop-types';

class InputDefault extends React.Component {
  render() {
    const { describe, id, name, value, testid, testidLabel, handleChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ testidLabel }>
        { describe }
        <input
          id={ id }
          name={ name }
          value={ value }
          data-testid={ testid }
          onChange={ handleChange }
          type="text"
        />
      </label>
    );
  }
}

InputDefault.propTypes = {
  describe: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  testidLabel: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputDefault;
