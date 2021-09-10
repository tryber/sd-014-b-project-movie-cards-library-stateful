import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  render() {
    const { title, subtitle, imagePath } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título:
          <input
            type="text"
            id="title-input"
            title={ title }
            data-testid="title-input"

          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo:
          <input
            type="text"
            id="subtitle-input"
            subtitle={ subtitle }
            data-testid="subtitle-input"

          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            id="image-input"
            data-testid="image-input"
            imagePath={ imagePath }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default AddMovie;
