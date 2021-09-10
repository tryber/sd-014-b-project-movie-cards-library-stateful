import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImage extends Component {
  render() {
    const { description, image, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        { description }
        <input
          type="text"
          name="imagePath"
          id="image-input"
          data-testid="image-input"
          value={ image }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputImage;
