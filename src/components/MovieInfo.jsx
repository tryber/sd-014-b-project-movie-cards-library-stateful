import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

class MovieInfo extends Component {
  render() {
    const { title, subtitle, imagePath, onChange } = this.props;

    return (
      <>
        <section className="field-body">
          <TextInput
            label="Título"
            type="text"
            name="title"
            value={ title }
            onChange={ onChange }
            dataTestid="title-input"
          />
          <TextInput
            label="Subtítulo"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ onChange }
            dataTestid="subtitle-input"
          />
        </section>
        <TextInput
          label="Imagem"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ onChange }
          dataTestid="image-input"
        />
      </>
    );
  }
}

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieInfo;
