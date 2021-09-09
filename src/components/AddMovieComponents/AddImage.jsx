import React from 'react';

class AddImage extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem:
        <input
          name="imagePath"
          type="text"
          id="image"
          data-testid="image-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default AddImage;
