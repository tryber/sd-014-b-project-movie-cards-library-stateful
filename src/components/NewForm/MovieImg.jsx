import React from 'react';
import PropTypes from 'prop-types';

class MovieImg extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;

    return (
      <label htmlFor="imageInput" data-testid="imageInputLabel">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="imageInput"
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
