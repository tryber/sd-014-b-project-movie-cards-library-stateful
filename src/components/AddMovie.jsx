// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const inicialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = inicialState;
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        subtitle=
        { subtitle }
        title=
        { title }
        imagePath=
        { imagePath }
        storyline=
        { storyline }
        rating=
        { rating }
        genre=
        { genre }
        onClick=
        { onClick }
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
