import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import TextInputDefault from './TextInputDefault'; */
import TextareaInputDefault from './TextareaInputDefault';
import NumberInputDefault from './NumberInputDefault';
import SelectGenre from './SelectGenre';
import TextFormComponent from './TextFormComponent';
import ButtonDefault from './ButtonDefault';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) { // fonte: Course (12.2)
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() { // ArrowFunc dispensa bind
    console.log(this.state);
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    console.log(this.state); // bug aqui
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
        <ButtonDefault
          inputId="send-button"
          onClick={ this.handleSubmit }
          description="Adicionar filme"
        />

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
