import React, { Component } from 'react';

class InputImage extends Component {
  render() {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input type="text" data-testid="image-input" />
      </label>
    );
  }
}

export default InputImage;
