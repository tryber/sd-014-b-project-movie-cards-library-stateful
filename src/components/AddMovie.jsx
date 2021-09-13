import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './inputs/InputTitle';
import InputSubtitle from './inputs/InputSubtitle';
import InputImagePath from './inputs/InputImagePath';
import InputStoryline from './inputs/InputStoryline';
import InputRating from './inputs/InputRating';
import InputGenre from './inputs/InputGenre';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.salveNewMovie = this.salveNewMovie.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleChange({ target }) {
    if (target.name === 'rating') {
      this.setState({ [target.name]: Number(target.value) });
    } else {
      this.setState({ [target.name]: target.value });
    }
  }

  salveNewMovie(event, callback) {
    event.preventDefault();
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } handleChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } handleChange={ this.handleChange } />
        <InputImagePath value={ imagePath } handleChange={ this.handleChange } />
        <InputStoryline value={ storyline } handleChange={ this.handleChange } />
        <InputRating value={ Number(rating) } handleChange={ this.handleChange } />
        <InputGenre value={ genre } handleChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => this.salveNewMovie(event, onClick) }
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
