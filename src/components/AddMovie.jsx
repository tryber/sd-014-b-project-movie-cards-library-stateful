import React, { Component } from 'react';
import InputTitle from './inputs/InputTitle';
import InputSubtitle from './inputs/InputSubtitle';
import InputImagePath from './inputs/InputImagePath';
import InputStoryline from './inputs/InputStoryline';
import InputRating from './inputs/InputRating';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleChange({ target }) {
    if (target.name === 'rating') {
      this.setState({ [target.name]: Number(target.value) });
    } else {
      this.setState({ [target.name]: target.value });
    }
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } handleChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } handleChange={ this.handleChange } />
        <InputImagePath value={ imagePath } handleChange={ this.handleChange } />
        <InputStoryline value={ storyline } handleChange={ this.handleChange } />
        <InputRating value={ Number(rating) } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
