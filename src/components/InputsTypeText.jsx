import React from 'react';
import PropTypes from 'prop-types';

class InputsTypeText extends React.Component {
  render() {
    const { title, subtitle, imagePath, handleInputChange } = this.props;
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange={ handleInputChange }
          />
        </label>
      </div>
    );
  }
}

InputsTypeText.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

InputsTypeText.defaultProps = {
  title: '',
  subtitle: '',
  imagePath: '',
};

export default InputsTypeText;
