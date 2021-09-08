import React from 'react';
import PropTypes from 'prop-types';

class SimpleImput extends React.Component {
  render() {
    const { name, value, inputType, labelText,
      inputTestId, labelTestId, onChangeCallback } = this.props;

    return (
      <label htmlFor={ name } data-testid={ labelTestId }>
        { labelText }
        <input
          name={ name }
          id={ name }
          value={ value }
          type={ inputType }
          data-testid={ inputTestId }
          onChange={ onChangeCallback }
        />
      </label>
    );
  }
}

SimpleImput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputTestId: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
};

export default SimpleImput;
