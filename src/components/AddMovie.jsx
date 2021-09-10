import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputMovieTitle from './InputMovieTitle';
import InputMovieSubTitle from './InputMovieSubTitle';
import InputMovieImage from './InputMovieImage';
import InputMovieStoryLine from './InputMovieStoryLine';
import InputMovieRating from './InputMovieRating';
import InputMovieGenre from './InputMovieGenre';

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
    this.handleState = this.handleState.bind(this);
    this.submitFunction = this.submitFunction.bind(this);
  }

  handleState = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

submitFunction = (state) => {
  const { onClick } = this.props;
  onClick(state);
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
  const { subtitle,
    title,
    imagePath,
    storyline,
    rating,
    genre,
  } = this.state;

  return (
    <form action="" data-testid="add-movie-form">
      <InputMovieTitle value={ title } funcaoAtualizaPai={ this.handleState } />
      <InputMovieSubTitle value={ subtitle } funcaoAtualizaPai={ this.handleState } />
      <InputMovieImage value={ imagePath } funcaoAtualizaPai={ this.handleState } />
      <InputMovieStoryLine value={ storyline } funcaoAtualizaPai={ this.handleState } />
      <InputMovieRating value={ rating } funcaoAtualizaPai={ this.handleState } />
      <InputMovieGenre value={ genre } funcaoAtualizaPai={ this.handleState } />
      <button
        type="submit"
        data-testid="send-button"
        onClick={ () => this.submitFunction(this.state) }
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
