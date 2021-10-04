import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImagePath extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="inputImagePath">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          id="inputImagePath"
          type="text"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImagePath;
