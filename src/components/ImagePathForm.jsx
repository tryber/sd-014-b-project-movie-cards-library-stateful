import React from 'react';

class ImagePathForm extends React.Component {
  render() {
    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
      >
        Imagem:
        <input
          data-testid="image-input"
        />
      </label>
    );
  }
}
export default ImagePathForm;
