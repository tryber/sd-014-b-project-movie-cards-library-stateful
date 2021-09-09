import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <label htmlFor="image-input-label" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          alt="movie-poster"
          data-testid="image-input"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
