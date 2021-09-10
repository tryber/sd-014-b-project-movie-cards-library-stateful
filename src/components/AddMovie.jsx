import React, { Component } from 'react';
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
    return (
      <form data-testid="add-movie-form">
        <TitleInput title={ title } />
        <SubtitleInput subtitle={ subtitle } />
        <ImagepathInput imagePath={ imagePath } />
        <StorylineInput storyline={ storyline } />
        <RatingInput rating={ rating } />
        <GenreInput genre={ genre } />
      </form>
    );
  }
}

export default AddMovie;
