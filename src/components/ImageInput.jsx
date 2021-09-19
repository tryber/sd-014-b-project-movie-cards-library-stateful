import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="image"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = PropTypes.shape({
  value: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;

export default ImageInput;
