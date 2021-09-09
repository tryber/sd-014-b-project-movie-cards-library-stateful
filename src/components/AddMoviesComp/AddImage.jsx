import React from 'react';
import PropTypes from 'prop-types';

export default class AddImage extends React.Component {
  render() {
    const { onChange, imagePath } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input-label"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
