// implement AddMovie component here
import React, { Component } from 'react';
import ImagePath from './ImagePath';
import RatingAddMovie from './RatingAddMovie';
import Storyline from './Storyline';
import Subtitle from './Subtitle';
import Title from './Title';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      /* genre: 'action', */
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
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
      </form>
    );
  }
}

export default AddMovie;
