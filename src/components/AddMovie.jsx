import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import TextInputDefault from './TextInputDefault'; */
import TextareaInputDefault from './TextareaInputDefault';
import NumberInputDefault from './NumberInputDefault';
import SelectGenre from './SelectGenre';
import TextFormComponent from './TextFormComponent';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
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

  handleSubmit = () => { // ArFunc dispensa bind
    this.setState = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextFormComponent
          valueTitle={ title }
          valueSubtitle={ subtitle }
          valueImg={ imagePath }
          handleChange={ this.handleChange }
        />
        <TextareaInputDefault
          name="storyline"
          inputId="storyline-input"
          labelId="storyline-input-label"
          value={ storyline }
          handleChange={ this.handleChange }
          description="Sinopse"
        />
        <NumberInputDefault
          name="rating"
          inputId="rating-input"
          labelId="rating-input-label"
          value={ rating }
          handleChange={ this.handleChange }
          description="Avaliação"
        />
        <SelectGenre
          name="genre"
          inputId="genre-input"
          labelId="genre-input-label"
          value={ genre }
          handleChange={ this.handleChange }
          description="Gênero"
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
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
