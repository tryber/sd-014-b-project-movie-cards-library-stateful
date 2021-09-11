import React from 'react';
import { PropTypes } from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      id,
      description,
      name,
      value,
      type,
      onChange,
      checked,
      dataTestIdInput,
      dataTestIdLabel,
    } = this.props;

    return (
      <label htmlFor={ id } data-testid={ dataTestIdLabel }>
        { description }
        <input
          id={ id }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          checked={ checked }
          data-testid={ dataTestIdInput }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  dataTestIdInput: PropTypes.string.isRequired,
  dataTestIdLabel: PropTypes.string.isRequired,
};

Input.defaultProps = {
  name: '',
  checked: false,
};

export default Input;
