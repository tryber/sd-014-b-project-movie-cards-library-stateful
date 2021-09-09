import React from 'react';
import PropTypes from 'prop-types';

class TextareaAddMovie extends React.Component {
  render() {
    const { name, description, value, handleChange } = this.props;
    return (
      <label
        data-testid={ `${name}-input-label` }
        className="form-label"
        htmlFor={ `add-${name}` }
      >
        {description}
        <textarea
          data-testid={ `${name}-input` }
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

TextareaAddMovie.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextareaAddMovie;
