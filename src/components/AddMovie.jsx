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

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { onCLick } = this.props;
    const { title, imagePath, storyline, rating, genre, subtitle } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleTitleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onCLick: PropTypes.function,
}.isRequired;

export default AddMovie;
