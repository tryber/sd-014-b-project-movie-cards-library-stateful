import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieInfo from './MovieInfo';
import GenreInput from './GenreInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { props: { onClick }, state } = this;
    onClick(state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form
        className="add-movie-form field"
        onSubmit={ this.handleClick }
        data-testid="add-movie-form"
      >
        <MovieInfo
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          onChange={ this.handleChange }
        />
        <StorylineInput
          storyline={ storyline }
          onChange={ this.handleChange }
        />
        <section className="field-body">
          <RatingInput
            value={ rating }
            onChange={ this.handleChange }
          />
          <GenreInput
            genre={ genre }
            onChange={ this.handleChange }
          />
        </section>
        <section className="field">
          <button
            className="button is-link"
            type="submit"
            data-testid="send-button"
          >
            Adicionar filme
          </button>
        </section>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
