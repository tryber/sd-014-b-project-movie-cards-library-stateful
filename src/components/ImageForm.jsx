import React from 'react';
import PropTypes from 'prop-types';

class ImageForm extends React.Component {
  render() {
    const { imagePath, myFunction } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ myFunction }
        />
      </label>
    );
  }
}

ImageForm.propTypes = {
  imagePath: PropTypes.string.isRequired,
  myFunction: PropTypes.func.isRequired,
};

export default ImageForm;
