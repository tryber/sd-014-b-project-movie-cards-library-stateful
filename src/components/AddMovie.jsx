import React, { Component } from 'react';
import Title from './AddMovieComponents/Title';
import Subtitle from './AddMovieComponents/Subtitle';
import ImagePath from './AddMovieComponents/ImagePath';
import Storyline from './AddMovieComponents/Storyline';
import Rating from './AddMovieComponents/Rating';
import Genre from './AddMovieComponents/Genre';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <ImagePath value={ imagePath } onChange={ this.handleChange } />
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
