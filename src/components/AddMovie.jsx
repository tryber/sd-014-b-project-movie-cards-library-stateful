import React from 'react';
import PropTypes from 'prop-types';

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
    }
  }

  render() {
    /* const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.props; */

    return (
      <form data-testid="add-movie-form">

      </form>
    )
  }
}

AddMovie.protoTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
}

export default AddMovie;
