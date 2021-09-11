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
    this.initialState = this.initialState.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  initialState() {
    const { onClick } = this.props;

    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TitleInput title={ title } inputChange={ this.inputChange } />
        <SubtitleInput subtitle={ subtitle } inputChange={ this.inputChange } />
        <ImagepathInput imagePath={ imagePath } inputChange={ this.inputChange } />
        <StorylineInput storyline={ storyline } inputChange={ this.inputChange } />
        <RatingInput rating={ rating } inputChange={ this.inputChange } />
        <GenreInput genre={ genre } inputChange={ this.inputChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.initialState }
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
