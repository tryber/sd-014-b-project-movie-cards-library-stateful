import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    const { imagePath } = this.props;
    return (
      <label htmlFor data-testid="image-input-label">
        Imagem
        <input
          type="image"
          alt="movie-poster"
          data-testid="image-input"
          value={ imagePath }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
};
