import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInputDefault from './TextInputDefault';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      /*       storyline: '',
      rating: 0,
      genre: 'action', */
    };
  }

  handleChange({ target }) { // fonte: Course (12.2)
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath /* , storyline, rating, genre */ } = this.state;
    return (
      <form>
        <TextInputDefault
          name="title"
          inputId="title-input"
          labelId="title-input-label"
          value={ title }
          handleChange={ this.handleChange }
          description="Título"
          type="text"
        />
        <TextInputDefault
          name="subtitle"
          inputId="subtitle-input"
          labelId="subtitle-input-label"
          value={ subtitle }
          handleChange={ this.handleChange }
          description="Subtítulo"
          type="text"
        />
        <TextInputDefault
          name="imagePath"
          inputId="image-input"
          labelId="image-input-label"
          value={ imagePath }
          handleChange={ this.handleChange }
          description="Imagem"
          type="text"
        />
        <TextInputDefault />
        <TextInputDefault />
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
