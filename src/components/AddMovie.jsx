// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TitleComponent from './AddMovieComponents/TitleComponent';
import SubTitleComponent from './AddMovieComponents/SubTitleComponent';
import ImageComponent from './AddMovieComponents/ImageComponent';
import StoryLineComponent from './AddMovieComponents/StoryLineComponent';
import RatingComponent from './AddMovieComponents/RatingComponent';
import GenreComponent from './AddMovieComponents/GenreComponent';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleText = this.handleText.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleText(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  submit(callback) {
    callback(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form action="" data-testid="add-movie-form">
        <TitleComponent callback={ this.handleText } value={ title } />
        <SubTitleComponent callback={ this.handleText } value={ subtitle } />
        <ImageComponent callback={ this.handleText } value={ imagePath } />
        <StoryLineComponent callback={ this.handleText } value={ storyLine } />
        <RatingComponent callback={ this.handleText } value={ rating } />
        <GenreComponent callback={ this.handleText } value={ genre } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => this.submit(onClick) }
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
