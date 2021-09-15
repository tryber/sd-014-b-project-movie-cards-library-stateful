import React from 'react';
import PropTypes from 'prop-types';

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
          data-testid="image-input"
          type="text"
        />
      </label>

    );
  }
}

InputImagePath.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputImagePath;
