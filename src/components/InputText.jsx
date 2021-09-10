import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { title, subtitle, imagePath, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="title" testid="title-input-label">
          Título
          <input
            id="title"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
            type="text"
          />
        </label>
      </div>
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

/*
Aqui como temos 3 inputs com o tipo texto da pra fazer um componente só do mesmo tipo
daí quando passamos pra lá > add movie podemos passar o valor chumbado
*/
