import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <section className="col">
        <label
          className="form-label"
          htmlFor="image-input"
          data-testid="image-input-label"
        >
          Imagem
          <input
            className="form-control"
            data-testid="image-input"
            type="text"
            id="image-input"
            name="imagePath"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

ImagePath.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ImagePath;
