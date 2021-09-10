import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageInput extends Component {
  render() {
    const { initialState, onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={ initialState }
          onChange={ (event) => {
            onChange(event);
          } }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  initialState: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageInput;
