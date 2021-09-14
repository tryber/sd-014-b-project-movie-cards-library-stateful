import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

class InputAddMovie extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, onChange } = this.props;
    return (
      <>
        <Input
          textLabel="Título"
          type="text"
          id="title"
          value={ title }
          dataTestId="title-input"
          onChange={ onChange }
        />
        <Input
          textLabel="Subtítulo"
          type="text"
          id="subtitle"
          value={ subtitle }
          dataTestId="subtitle-input"
          onChange={ onChange }
        />
        <Input
          textLabel="Imagem"
          type="text"
          id="imagePath"
          value={ imagePath }
          dataTestId="image-input"
          onChange={ onChange }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyline"
            name="storyline"
            value={ storyline }
            onChange={ onChange }
          />
        </label>
      </>
    );
  }
}

InputAddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputAddMovie;
