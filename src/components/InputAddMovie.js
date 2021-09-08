import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovie extends React.Component {
  render() {
    const { name, description, value, handleChange } = this.props;

    let test = '';
    if (name === 'imagePath') {
      test = 'image';
    } else {
      test = name;
    }

    return (
      <label
        data-testid={ `${test}-input-label` }
        className="form-label"
        htmlFor={ `add-${name}` }
      >
        {description}
        <input
          data-testid={ `${test}-input` }
          className="form-input"
          id={ `add-${name}` }
          type="text"
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputAddMovie.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputAddMovie;
