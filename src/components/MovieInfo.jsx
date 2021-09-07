import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputWithLabel } from './InputWithLabel';

export class MovieInfo extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, onChange } = this.props;

    return (
      <>
        <InputWithLabel
          label="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ onChange }
          dataTestid="title-input"
        />
        <InputWithLabel
          label="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ onChange }
          dataTestid="subtitle-input"
        />
        <InputWithLabel
          label="Imagem"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ onChange }
          dataTestid="image-input"
        />
        <InputWithLabel
          label="Sinopse"
          type="textarea"
          name="storyline"
          value={ storyline }
          onChange={ onChange }
          dataTestid="storyline-input"
        />
      </>
    );
  }
}

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieInfo;
