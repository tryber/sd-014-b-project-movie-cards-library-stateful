import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          id="imagePath"
          type="text"
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputImage;
