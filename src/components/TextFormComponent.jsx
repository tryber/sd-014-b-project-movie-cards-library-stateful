import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextFormComponent extends Component {
  render() {
    const { valueTitle, valueSubtitle, valueImg, handleChange } = this.props;
    return (
      <>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            value={ valueTitle }
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            value={ valueSubtitle }
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            data-testid="image-input"
            value={ valueImg }
            onChange={ handleChange }
            type="text"
          />
        </label>
      </>
    );
  }
}

TextFormComponent.propTypes = {
  name: PropTypes.string,
  inputId: PropTypes.string,
  labelId: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  description: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default TextFormComponent;
