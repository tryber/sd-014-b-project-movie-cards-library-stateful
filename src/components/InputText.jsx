import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { title, subtitle, imagePath, handleChange } = this.props;
    return (
      <>
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            data-testid="title-input"
            type="text"
            name="title"
            id="title"
            value={ title }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            id="imagePath"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputText;
