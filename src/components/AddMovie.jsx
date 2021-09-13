// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      /* rating: 0,
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
    const { title, subtitle, imagePath, storyline } = this.state;
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
        <label htmlFor="subtitleText" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            id="subtitleText"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            value={ subtitle }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            id="image"
            data-testid="image-input"
            onChange={ this.handleChange }
            value={ imagePath }
          />
        </label>
        <label htmlFor="textArea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="textArea"
            data-testid="storyline-input"
            onChange={ this.handleChange }
            value={ storyline }
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
