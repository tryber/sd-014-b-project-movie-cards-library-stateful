// implement AddMovie component here
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddMovie extends Component {
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
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
                
      </form>
    )
}
}

export default AddMovie
