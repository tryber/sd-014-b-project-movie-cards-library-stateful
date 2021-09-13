import React from 'react';
import SubtitleAdd from './SubtitleAdd';
import TitleAdd from './TitleAdd';
import ImagePathAdd from './ImagePathAdd';
import StorylineAdd from './StorylineAdd';
import RatingAdd from './RatingAdd';
import GenreAdd from './GenreAdd';

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

    this.AddMovie = this.AddMovie.bind(this);
  }

  AddMovie({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { state } = this;
    return (
      <section>
        <form htmlFor="search" data-testid="add-movie-form">
          <SubtitleAdd addMovie={ this.addMovie } value={ state.subtitle } />
          <TitleAdd addMovie={ this.addMovie } value={ state.title } />
          <ImagePathAdd addMovie={ this.addMovie } value={ state.imagePath } />
          <StorylineAdd addMovie={ this.addMovie } value={ state.storyline } />
          <RatingAdd addMovie={ this.addMovie } value={ state.rating } />
          <GenreAdd addMovie={ this.addMovie } value={ state.genre } />
          <button type="submit" data-testid="send-button">Adicionar Filme</button>
        </form>
      </section>
    );
  }
}

export default AddMovie;
