import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputNumber from './InputNumber';
import TextAreaForm from './textArea';

class AddMovieForm extends Component {
  render() {
    const {
      titleState,
      subtitleState,
      imgPathState,
      sinopseState,
      ratingState,
      genreState,
      onChange } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputText
          titleName="Título"
          id="title"
          textHold="Nome do filme"
          name="title"
          initValue={ titleState }
          change={ onChange }
        />
        <InputText
          titleName="Subtítulo"
          id="subtitle"
          textHold="Subtitulo do filme"
          name="subtitle"
          initValue={ subtitleState }
          change={ onChange }
        />
        <InputText
          titleName="Imagem"
          id="image"
          textHold="https://www.url.com/imagem.png"
          name="imagePath"
          initValue={ imgPathState }
          change={ onChange }
        />
        <TextAreaForm initValue={ sinopseState } change={ onChange } />
        <InputNumber initValue={ ratingState } change={ onChange } />
      </form>
    );
  }
}

AddMovieForm.propTypes = PropTypes.shape({
  titleState: PropTypes.string,
  subtitleState: PropTypes.string,
  imgPathState: PropTypes.string,
  ratingState: PropTypes.number,
  onChange: PropTypes.func,
}).isRequired;

export default AddMovieForm;
