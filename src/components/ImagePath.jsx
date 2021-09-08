import React from 'react';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;

    return (
      <label htmlFor="input-imagePath-addMovie" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          id="input-imagePath-addMovie"
          type="text"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default ImagePath;
