// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputTitle from './miniComponents/inputTitle';
import InputSubtitle from './miniComponents/inputSubtitle';
import InputImage from './miniComponents/inputImage';
import InputStory from './miniComponents/inputStory';
import InputRating from './miniComponents/inputRating';
import InputGenre from './miniComponents/inputGenre';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetButton = this.resetButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetButton() {
    const { onClick } = this.props;
    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputTitle title={ title } onChange={ this.handleChange } />
          <InputSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
          <InputImage imagePath={ imagePath } onChange={ this.handleChange } />
          <InputStory storyLine={ storyLine } onChange={ this.handleChange } />
          <InputRating rating={ rating } onChange={ this.handleChange } />
          <InputGenre genre={ genre } onChange={ this.handleChange } />
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.resetButton }
          >
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
