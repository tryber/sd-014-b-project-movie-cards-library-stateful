import React from 'react';

class ImageInput extends React.Component {
  render() {
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input data-testid="image-input" id="image" type="text" />
      </label>
    );
  }
}

export default ImageInput;
