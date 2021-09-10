import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputAddMovie extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, onChange } = this.props;
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            name="imagePath"
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            id="storyline"
            name="storyline"
            data-testid="storyline-input"
            type="text"
            value={ storyline }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

InputAddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputAddMovie;
