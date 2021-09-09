import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Input from './Input';

class AddMovieSup extends Component {
  render() {
    const { handleInputs, title, subtitle, imagePath } = this.props;

    return (
      <>
        <Input
          description="Título"
          id="title-movie"
          value={ title }
          type="text"
          name="title"
          dataTestIdLabel="title-input-label"
          dataTestIdInput="title-input"
          onChange={ handleInputs }
        />

        <Input
          description="Subtítulo"
          id="subtitle-movie"
          value={ subtitle }
          type="text"
          name="subtitle"
          dataTestIdLabel="subtitle-input-label"
          dataTestIdInput="subtitle-input"
          onChange={ handleInputs }
        />

        <Input
          description="Imagem"
          id="img-movie-path"
          value={ imagePath }
          type="text"
          name="imagePath"
          dataTestIdLabel="image-input-label"
          dataTestIdInput="image-input"
          onChange={ handleInputs }
        />
      </>
    );
  }
}

AddMovieSup.propTypes = {
  handleInputs: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default AddMovieSup;
