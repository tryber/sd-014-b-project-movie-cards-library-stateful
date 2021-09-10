import React from 'react';
import PropTypes from 'prop-types';

class InputGlobal extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, handleChange } = this.props;

    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          <h5>Título</h5>
          <input
            data-testid="title-input"
            value={ title }
            id="title"
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          <h5>Subtítulo</h5>
          <input
            data-testid="subtitle-input"
            value={ subtitle }
            id="subtitle"
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          <h5>Imagem</h5>
          <input
            data-testid="image-input"
            value={ imagePath }
            id="imagePath"
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          <h5>Sinopse</h5>
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            id="storyline"
            onChange={ handleChange }
            type="text"
          />
        </label>
      </div>
    );
  }
}

InputGlobal.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default InputGlobal;
