import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    event();
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
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } handleChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } handleChange={ this.handleChange } />
        <InputImage value={ imagePath } handleChange={ this.handleChange } />
        <InputStoryline value={ storyline } handleChange={ this.handleChange } />
        <InputRating value={ rating } handleChange={ this.handleChange } />
        <InputGenre value={ genre } handleChange={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => { this.handleClick(onClick); } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
