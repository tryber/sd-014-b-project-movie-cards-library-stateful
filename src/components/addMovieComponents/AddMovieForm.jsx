import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

class AddMovieForm extends Component {
  render() {
    const {
      titleState,
      subtitleState,
      imgPathState,
      onChange } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputText
          titleName="Título"
          id="title"
          name="title"
          initValue={ titleState }
          change={ onChange }
        />
        <InputText
          titleName="Subtítulo"
          id="subtitle"
          name="subtitle"
          initValue={ subtitleState }
          change={ onChange }
        />
        <InputText
          titleName="Imagem"
          id="image"
          name="imagePath"
          initValue={ imgPathState }
          change={ onChange }
        />
      </form>
    );
  }
}

AddMovieForm.propTypes = PropTypes.shape({
  titleState: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;

export default AddMovieForm;
