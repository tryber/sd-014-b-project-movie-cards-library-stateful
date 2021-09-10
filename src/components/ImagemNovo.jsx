import React from 'react';

class ImagemNovo extends React.Component {
  render() {
    return (
      <label htmlFor="imagemNovo" data-testid="image-input-label">
        Imagem
        <input
          id="imagemNovo"
          data-testid="image-input"
          onChange={ this.onClick }
        />
      </label>
    );
  }
}

export default ImagemNovo;
