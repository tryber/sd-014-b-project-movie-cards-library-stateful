import React from 'react';

class InputImagePath extends React.Component {

  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="imagePath-input-label">
        Imagem
        <input
          name="imagePath"
          value={ imagePath }
          handleChange={ handleChange }
          data-testid="imagePath-input"
        />
      </label>

    );
  }
}

export default InputImagePath;
