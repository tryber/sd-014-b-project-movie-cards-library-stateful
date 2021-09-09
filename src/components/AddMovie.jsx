import React from 'react';
import PropTypes from 'prop-types';
import TitleAddMovie from './TitleAddMovie';
import SubtitleAddMovie from './SubtitleAddMovie';
import ImageAddMovie from './ImageAddMovie';
import SinopseAddMovie from './SinopseAddMovie';
import RatingAddMovie from './RatingAddMovie';
import GenreAddMovie from './GenreAddMovie';

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

    this.addMovie = this.addMovie.bind(this);
  }

  addMovie({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { state } = this;
    return (
      <section>
        <form data-testid="add-movie-form">
          <TitleAddMovie value={ state.title } addMovie={ this.addMovie } />
          <SubtitleAddMovie value={ state.subtitle } addMovie={ this.addMovie } />
          <ImageAddMovie value={ state.imagePath } addMovie={ this.addMovie } />
          <SinopseAddMovie value={ state.storyline } addMovie={ this.addMovie } />
          <RatingAddMovie value={ state.rating } addMovie={ this.addMovie } />
          <GenreAddMovie value={ state.genre } addMovie={ this.addMovie } />
          <button type="submit" data-testid="send-button">Adicionar Filme</button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}.isRequired;

export default AddMovie;
