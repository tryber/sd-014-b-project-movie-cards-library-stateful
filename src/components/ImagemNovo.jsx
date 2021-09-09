import React from 'react';

class ImagemNovo extends React.Component {
  render() {
    return (
      <label htmlFor="imagemNovo" data-testid="image-input-label">
        Imagem
        <input
          id="imagemNovo"
          data-testid="image-input"
          // value={ this.state.imagePath }
          onChange={ this.onClick }
        />
      </label>
    );
  }
}

export default ImagemNovo;
