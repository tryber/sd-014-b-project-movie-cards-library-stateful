import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title-image" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          id="text-image"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequered;

export default ImagePath;
