import React from 'react';
import PropTypes from 'prop-types';
import AddMovieInput from './AddMovieInput';

class TitleInputs extends React.Component {
  render() {
    const { handleChange, state } = this.props;
    const { title, subtitle, imagePath } = state;
    return (
      <form>
        <AddMovieInput
          name="title"
          value={ title }
          onChange={ handleChange }
          dataId="title-input"
          html="Titulo"
          content="Título"
          dataIdLabel="title-input-label"
        />
        <AddMovieInput
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
          dataId="subtitle-input"
          html="Subtitulo"
          content="Subtítulo"
          dataIdLabel="subtitle-input-label"
        />
        <AddMovieInput
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
          dataId="image-input"
          html="Imagem"
          content="Imagem"
          dataIdLabel="image-input-label"
        />
      </form>
    );
  }
}

TitleInputs.propTypes = {
  state: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleInputs;
