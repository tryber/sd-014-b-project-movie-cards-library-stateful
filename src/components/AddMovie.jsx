import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagepathInput from './AddMovieInputs/ImagepathInput';
import RatingInput from './AddMovieInputs/RatingInput';
import TitleInput from './AddMovieInputs/TitleInput';
import SubtitleInput from './AddMovieInputs/SubtitleInput';
import StorylineInput from './AddMovieInputs/StorylineInput';
import GenreInput from './AddMovieInputs/GenreInput';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { addNewMovie } = this.props;
    return (
      <form data-testid="add-movie-form">
        <TitleInput title={ title } />
        <SubtitleInput subtitle={ subtitle } />
        <ImagepathInput imagePath={ imagePath } />
        <StorylineInput storyline={ storyline } />
        <RatingInput rating={ rating } />
        <GenreInput genre={ genre } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ addNewMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  addNewMovie: PropTypes.func.isRequired,
};

export default AddMovie;
