import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      type,
      titleLabel,
      dataTestIdLabel,
      dataTestIdInput,
      name,
      value,
      handleChange,
    } = this.props;

    return (
      <label
        htmlFor={ dataTestIdInput }
        data-testid={ dataTestIdLabel }
      >
        {titleLabel}
        <input
          type={ type }
          id={ dataTestIdInput }
          data-testid={ dataTestIdInput }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  titleLabel: PropTypes.string.isRequired,
  dataTestIdLabel: PropTypes.string.isRequired,
  dataTestIdInput: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
