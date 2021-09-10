// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  resetState = (callback) => {
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, imagePath, storyline, rating, genre, subtitle } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <InputTitle
          title={ title }
          description="Título"
          handleChange={ this.handleChange }
        />
        <InputSubtitle
          subtitle={ subtitle }
          description="Subtítulo"
          handleChange={ this.handleChange }
        />
        <InputImage
          image={ imagePath }
          description="Imagem"
          handleChange={ this.handleChange }
        />
        <InputStoryline
          storyline={ storyline }
          description="Sinopse"
          handleChange={ this.handleChange }
        />
        <InputRating
          rating={ rating }
          description="Avaliação"
          handleChange={ this.handleChange }
        />
        <InputGenre
          genre={ genre }
          description="Gênero"
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.resetState(onClick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onCLick: PropTypes.func,
}.isRequired;

export default AddMovie;
