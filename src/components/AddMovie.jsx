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
  }

  handleMovie({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addAndReset(callback) {
    callback();

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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
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
          onClick={ onClick }
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
