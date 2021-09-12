import React from 'react';
import PropTypes from 'prop-types';

class ImageAddMovie extends React.Component {
  render() {
    const { value, addMovie } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          onChange={ addMovie }
          name="imagePath"
          value={ value }
          id="image-input"
        />
      </label>
    );
  }
}

ImageAddMovie.propTypes = {
  value: PropTypes.string,
  addMovie: PropTypes.func,
}.isRequired;

export default ImageAddMovie;
