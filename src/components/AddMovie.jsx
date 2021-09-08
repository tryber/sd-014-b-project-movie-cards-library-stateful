// implement AddMovie component here
import React from 'react';
import GenreInput from '../Forms/GenreInput';
import ImagePath from '../Forms/ImagePath';
import Storyline from '../Forms/Storyline';
import Subtitle from '../Forms/Subtitle';
import Title from '../Forms/Title';
import Rating from './Rating';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title handleChange={ this.handleChange } />
        <Subtitle handleChange={ this.handleChange } />
        <ImagePath handleChange={ this.handleChange } />
        <Storyline handleChange={ this.handleChange } />
        <Rating handleChange={ this.handleChange } />
        <GenreInput handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
