// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  /* constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.addMovies = this.addMovies.bind(this);
  } */

  /* addMovies({ target }) {
  } */

  render() {
    const { addMovies } = this.props;
    return (
      <form>
        <input
          value={ addMovies }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  addMovies: PropTypes.func.isRequired,
};

export default AddMovie;
