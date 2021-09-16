import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { title, imagePath, handleChange } = this.props;
    return (
      <div>
        <label
          htmlFor="Imagem"
          data-testid="image-input-label"
        >
          Imagem
          <input
            alt={ title }
            data-testid="image-input"
            type="text"
            onChange={ handleChange }
            value={ imagePath }
          />
        </label>
      </div>
    );
  }
}

InputImage.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputImage;
