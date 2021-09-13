import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImagePath extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="imagePathFormAdd" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imagePathFormAdd"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputImagePath;
