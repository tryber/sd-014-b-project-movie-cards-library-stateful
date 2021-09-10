import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputAddMovie from './inputAddMovie';
import InputGenreRating from './inputGenreRating';

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
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
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

  render() {
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputAddMovie
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            imagePath={ imagePath }
            onChange={ this.handleChange }
          />
          <InputGenreRating
            rating={ rating }
            genre={ genre }
            onChange={ this.handleChange }
          />
          <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
