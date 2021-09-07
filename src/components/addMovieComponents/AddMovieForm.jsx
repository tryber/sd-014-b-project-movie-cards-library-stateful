import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputNumber from './InputNumber';

class AddMovieForm extends Component {
  render() {
    const {
      titleState,
      subtitleState,
      imgPathState,
      ratingState,
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
