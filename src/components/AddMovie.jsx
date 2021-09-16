import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleAddMovie from './TitleAddMovie';
import SubtitleAddMovie from './SubtitleAddMovie';
import ImageAddMovie from './ImageAddMovie';
import StorylineAddMovie from './StorylineAddMovie';
import RatingAddMovie from './RatingAddMovie';
import GenreAddMovie from './GenreAddMovie';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { state } = this;
    return (
      <form action="" data-testid="add-movie-form">
        <TitleAddMovie value={ state.title } handleChange={ this.handleChange } />
        <SubtitleAddMovie value={ state.subtitle } handleChange={ this.handleChange } />
        <ImageAddMovie value={ state.imagePath } handleChange={ this.handleChange } />
        <StorylineAddMovie value={ state.storyline } handleChange={ this.handleChange } />
        <RatingAddMovie value={ state.rating } handleChange={ this.handleChange } />
        <GenreAddMovie value={ state.genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}.isRequired;

export default AddMovie;
