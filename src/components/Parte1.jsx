import React from 'react';
import PropTypes from 'prop-types';

class Parte1 extends React.Component {
  render() {
    const { title, onChange, subtitle, imagePath } = this.props;
    return (
      <div>
        <div>
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              id="title"
              data-testid="title-input"
              value={ title }
              onChange={ onChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ onChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              id="imagePath"
              data-testid="image-input"
              value={ imagePath }
              onChange={ onChange }
            />
          </label>
        </div>
      </div>
    );
  }
}
Parte1.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default Parte1;
