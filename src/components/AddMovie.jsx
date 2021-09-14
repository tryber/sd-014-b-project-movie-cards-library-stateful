import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInputDefault from './TextInputDefault';
import TextareaInputDefault from './TextareaInputDefault';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      /* rating: 0,
      genre: 'action', */
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) { // fonte: Course (12.2)
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline /* , rating, genre */ } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInputDefault
          name="title"
          inputId="title-input"
          labelId="title-input-label"
          value={ title }
          handleChange={ this.handleChange }
          description="Título"
        />
        <TextInputDefault
          name="subtitle"
          inputId="subtitle-input"
          labelId="subtitle-input-label"
          value={ subtitle }
          handleChange={ this.handleChange }
          description="Subtítulo"
        />
        <TextInputDefault
          name="imagePath"
          inputId="image-input"
          labelId="image-input-label"
          value={ imagePath }
          handleChange={ this.handleChange }
          description="Imagem"
        />
        <TextareaInputDefault
          name="storyline"
          inputId="storyline-input"
          labelId="storyline-input-label"
          value={ storyline }
          handleChange={ this.handleChange }
          description="Sinopse"
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}.isRequired;

export default AddMovie;
