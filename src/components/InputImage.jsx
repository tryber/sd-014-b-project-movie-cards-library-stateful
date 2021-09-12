import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <section>
        <article>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              data-testid="image-input"
              name="imagePath"
              value={ imagePath }
              onChange={ handleChange }
            />
          </label>
        </article>
      </section>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputImage;
