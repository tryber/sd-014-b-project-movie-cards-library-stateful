import React from 'react';
import PropTypes from 'prop-types';

class ImagepathInput extends React.Component {
  render() {
    const { imagePath } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          id="image-input"
          data-testid="image-input"
          value={ imagePath }
        />
      </label>
    );
  }
}

ImagepathInput.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default ImagepathInput;
