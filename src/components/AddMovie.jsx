// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';
import ImagePath from './ImagePath';
import RatingAddMovie from './RatingAddMovie';
import Storyline from './Storyline';
import Subtitle from './Subtitle';
import Title from './Title';

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
    this.resetButton = this.resetButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetButton(currentState) {
    const { onClick } = this.props;
    onClick(currentState);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="search-forms" data-testid="add-movie-form">
        <Title
          titleValue={ title }
          handleChange={ this.handleChange }
        />
        <Subtitle
          subtitleValue={ subtitle }
          handleChange={ this.handleChange }
        />
        <ImagePath
          imageValue={ imagePath }
          handleChange={ this.handleChange }
        />
        <Storyline
          storylineValue={ storyline }
          handleChange={ this.handleChange }
        />
        <RatingAddMovie
          ratingValue={ rating }
          handleChange={ this.handleChange }
        />
        <Genre
          genreValue={ genre }
          handleChange={ this.handleChange }
        />
        <button
          type="reset"
          data-testid="send-button"
          onClick={ () => this.resetButton(this.state) }
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
