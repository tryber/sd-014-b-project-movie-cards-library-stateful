import React from 'react';
import PropTypes from 'prop-types';

class MovieImg extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieImg.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieImg;
