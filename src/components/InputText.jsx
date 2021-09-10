import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { title, subtitle, imagePath, handleChange } = this.props;
    return (
      <>
        <label className="form-label" htmlFor="title" data-testid="title-input-label">
          Título
          <input
            className="form-control"
            id="title"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label
          className="form-label"
          htmlFor="subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            className="form-control"
            id="subtitle"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
            type="text"
          />
        </label>
        <label className="form-label" htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            className="form-control"
            id="imagePath"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
            type="text"
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
