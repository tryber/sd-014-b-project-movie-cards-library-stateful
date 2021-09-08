import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagem, funcao } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagem }
          data-testid="image-input"
          onChange={ funcao }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagem: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default ImagePath;
