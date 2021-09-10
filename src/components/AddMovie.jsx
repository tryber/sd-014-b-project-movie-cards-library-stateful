import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Titulo from './TituloForm';
import Subtitulo from './SubtituloForm';
import Imagem from './ImagemForm';
import Sinopse from './SinopseForm';
import Avaliator from './AvaliatorForm';
import Genre from './GenreForm';

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

    this.handleMovie = this.handleMovie.bind(this);
    this.addAndReset = this.addAndReset.bind(this);
  }

  handleMovie({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  gambiarra = () => {
    const idTitle = document.querySelector('#title').value;
    const idSubtitle = document.querySelector('#subtitle').value;
    const idImagePath = document.querySelector('#imagePath').value;
    const idStoryline = document.querySelector('#storyline').value;
    const idGenre = document.querySelector('#genre').value;
    const idRating = document.querySelector('#rating').value;
    const card = {
      title: idTitle,
      subtitle: idSubtitle,
      imagePath: idImagePath,
      storyline: idStoryline,
      rating: idRating,
      genre: idGenre,
    };
    return card;
  }

  addAndReset(callback) {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Titulo value={ title } handleMovie={ this.handleMovie } />
        <Subtitulo value={ subtitle } handleMovie={ this.handleMovie } />
        <Imagem value={ imagePath } handleMovie={ this.handleMovie } />
        <Sinopse value={ storyline } handleMovie={ this.handleMovie } />
        <Avaliator value={ rating } handleMovie={ this.handleMovie } />
        <Genre value={ genre } handleMovie={ this.handleMovie } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.addAndReset(onClick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
