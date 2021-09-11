import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import AddRating from './AddRating';
import Genre from './Genre';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  resetState() {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          titleValue={ title }
          onChange={ this.handleChange }
        />
        <Subtitle
          subtitle={ subtitle }
          onChange={ this.handleChange }
        />
        <Image
          imagePath={ imagePath }
          onChange={ this.handleChange }
        />
        <Storyline
          storyline={ storyline }
          onChange={ this.handleChange }
        />
        <AddRating
          rating={ rating }
          onChange={ this.handleChange }
        />
        <Genre
          genre={ genre }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.resetState }
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
