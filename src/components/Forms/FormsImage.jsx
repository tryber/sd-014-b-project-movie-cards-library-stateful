import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsImage extends Component {
  render() {
    const { imagePath, onChange } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

FormsImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormsImage;
