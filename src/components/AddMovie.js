import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenreTag from './GenreTag';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import Subtitle from './Subtitle';
import Title from './Title';
import RatingTag from './RatingTag';

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
  }

  setStateMethod = () => {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          onChange={ onChange }
        />
        <Subtitle
          title={ subtitle }
          onChange={ onChange }
        />
        <ImagePath
          onChange={ onChange }
          imagePath={ imagePath }
        />
        <Storyline
          onChange={ onChange }
          storyline={ storyline }
        />
        <RatingTag
          onChange={ onChange }
          rating={ rating }
        />
        <GenreTag
          onChange={ onChange }
          genre={ genre }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
