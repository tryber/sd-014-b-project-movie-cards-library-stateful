import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { title, imagePath, handleChange } = this.props;
    return (
      <div className="image">
        <label
          htmlFor="image"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            alt={ title }
            data-testid="image-input"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Image;
