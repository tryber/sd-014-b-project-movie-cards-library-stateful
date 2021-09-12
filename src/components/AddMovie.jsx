// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      /* imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action', */
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
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleText" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            id="titleText"
            data-testid="title-input"
            onChange={ this.handleChange }
            value={ title }
          />
        </label>
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  addMovies: PropTypes.func.isRequired,
}; */

export default AddMovie;
