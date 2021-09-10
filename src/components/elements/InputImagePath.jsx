import React from 'react';

class InputImagePath extends React.Component {
  render() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
        />
      </label>
    );
  }
}

export default InputImagePath;
