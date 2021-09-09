// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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

  render() {
    const { onCLick } = this.props;
    return (
      <form action="" data-testid="add-movie-form">
        
      </form>
    );
  }
}

AddMovie.propTypes = {
  onCLick: PropTypes.function,
}.isRequired;

export default AddMovie;
