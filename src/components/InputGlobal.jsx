import React from 'react';
import PropTypes from 'prop-types';

class InputGlobal extends React.Component {
  render() {
    const { title, subtitle, imagePath, handleChange } = this.props;

    return (
      <div>
        <label data-testid="title-input-label" htmlFor="title-input">
          <h5>Título</h5>
          <input
            data-testid="title-input"
            value={ title }
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          <h5>Subtítulo</h5>
          <input
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          <h5>Imagem</h5>
          <input
            data-testid="image-input"
            value={ imagePath }
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
};

export default InputGlobal;
