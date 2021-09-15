import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';
import Genre from './Genre';
import Story from './Story';
import Rating from './Rating';

class AddMovie extends React.Component {
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

  changeState = (event) => {
    const { key, value } = event.target;
    this.setState({ [key]: value });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.changeState } />
        <Subtitle value={ subtitle } onChange={ this.changeState } />
        <Image value={ imagePath } onChange={ this.changeState } />
        <Story value={ storyline } onChange={ this.changeState } />
        <Rating value={ rating } onChange={ this.changeState } />
        <Genre value={ genre } onChange={ this.changeState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
