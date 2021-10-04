import React, { Component } from 'react';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImagePath from './InputImagePath';
import InputStoryLine from './InputStoryLine';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.initialState = this.initialState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  initialState() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" action="">
        <InputTitle title={ title } onChange={ this.handleChange } />
        <InputSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <InputImagePath imagePath={ imagePath } onChange={ this.handleChange } />
        <InputStoryLine storyLine={ storyLine } onChange={ this.handleChange } />
        <InputRating rating={ rating } onChange={ this.handleChange } />
        <InputGenre genre={ genre } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
