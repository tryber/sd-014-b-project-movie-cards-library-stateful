import React from 'react';
import PropTypes from 'prop-types';

class ImageMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="mb-3">
        <label
          className="form-label"
          data-testid="image-input-label"
          htmlFor="image-input"
        >
          Imagem
        </label>
        <input
          className="form-control"
          type="text"
          name="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </div>
    );
  }
}

ImageMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default ImageMovie;
