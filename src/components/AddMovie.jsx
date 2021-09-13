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
          <TitleAdd value={ state.title } addMovie={ this.addMovie } />
          <ImagePathAdd value={ state.imagePath } addMovie={ this.addMovie } />
          <StorylineAdd value={ state.storyline } addMovie={ this.addMovie } />
          <RatingAdd value={ state.rating } addMovie={ this.addMovie } />
          <GenreAdd value={ state.genre } addMovie={ this.addMovie } />
          <button type="submit" data-testid="send-button">Adicionar Filme</button>
        </form>
      </section>
    );
  }
}

RatingAdd.propTypes = {
  value: PropTypes.string.isRequired,
  addMovie: PropTypes.func.isRequired,
};

export default AddMovie;
