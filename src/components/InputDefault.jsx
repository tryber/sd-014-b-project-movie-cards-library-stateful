import React from 'react';
import PropTypes from 'prop-types';

class InputDefault extends React.Component {
  render() {
    const {
      handleChange,
      testIdLabel,
      testIdInput,
      value,
      name,
      id,
      text,
      type,
    } = this.props;

    return (
      <label data-testid={ testIdLabel } htmlFor={ id }>
        { text }
        <input
          type={ type }
          id={ id }
          name={ name }
          value={ value }
          onChange={ handleChange }
          data-testid={ testIdInput }
        />
      </label>
    );
  }
}

InputDefault.propTypes = {
  handleChange: PropTypes.func.isRequired,
  testIdLabel: PropTypes.string.isRequired,
  testIdInput: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

InputDefault.defaultProps = {
  type: 'text',
};

export default InputDefault;
