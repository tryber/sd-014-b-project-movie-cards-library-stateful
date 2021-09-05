import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { title, subtitle, imagePath, handleChange } = this.props;

    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            name="title"
            value={ title }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default InputText;
