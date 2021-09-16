import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { onChange, imagePath } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

ImagePath.propTypes = {
  onChange: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default ImagePath;
