import React from 'react';
import PropTypes from 'prop-types';

class CustomInput extends React.Component {
  render() {
    const { onChange, id, value, data, Ref, type } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${data}-label` }>
        { Ref }
        <input
          name={ id }
          onChange={ onChange }
          id={ id }
          data-testid={ data }
          value={ value }
          type={ type }
        />
      </label>
    );
  }
}

CustomInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  Ref: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CustomInput;
