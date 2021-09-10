import React from 'react';
import PropTypes from 'prop-types';

class ImagePatch extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="MovieImage" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          value={ value }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePatch.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePatch;
