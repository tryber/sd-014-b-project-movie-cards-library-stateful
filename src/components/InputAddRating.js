import React from 'react';
import PropTypes from 'prop-types';

class InputAddRating extends React.Component {
  render() {
    const { name, description, value, handleChange } = this.props;
    return (
      <label
        data-testid={ `${name}-input-label` }
        className="form-label"
        htmlFor={ `add-${name}` }
      >
        {description}
        <input
          data-testid={ `${name}-input` }
          className="form-input"
          id={ `add-${name}` }
          type="number"
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputAddRating.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputAddRating;
