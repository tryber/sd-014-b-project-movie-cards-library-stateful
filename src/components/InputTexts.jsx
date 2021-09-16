import React from 'react';
import PropTypes from 'prop-types';

class InputTexts extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
    };
  }

  render() {
    const { change } = this.props;
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            onChange={ change }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            onChange={ change }
            value={ subtitle }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            onChange={ change }
            value={ imagePath }
          />
        </label>
      </div>
    );
  }
}

InputTexts.propTypes = {
  change: PropTypes.func.isRequired,
};

export default InputTexts;