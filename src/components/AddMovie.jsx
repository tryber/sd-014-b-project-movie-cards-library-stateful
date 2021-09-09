import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieComponents/Title';
import Subtitle from './AddMovieComponents/Subtitle';
import Imagem from './AddMovieComponents/Imagem';
import Sinopse from './AddMovieComponents/Sinopse';
import Avaliacao from './AddMovieComponents/Avaliação';
import Genero from './AddMovieComponents/Genero';

class AddMovie extends React.Component {
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

  handleClick = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  resetState = (state) => {
    const { onClick } = this.props;
    onClick(state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  };

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleClick } />
        <Subtitle value={ subtitle } onChange={ this.handleClick } />
        <Imagem value={ imagePath } onChange={ this.handleClick } />
        <Sinopse value={ storyline } onChange={ this.handleClick } />
        <Avaliacao value={ rating } onChange={ this.handleClick } />
        <Genero value={ genre } onChange={ this.handleClick } />
        <button
          type="reset"
          data-testid="send-button"
          onClick={ () => this.resetState(this.state) }
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
