// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMoviePartI from './addMoviePartI';

export class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      storyLine: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
  }

  updateState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const addMovieP1 = [storyline, rating, genre];

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            onChange={ this.updateState }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            data-testid="title-input"
            onChange={ this.updateState }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.updateState }
          />
        </label>
        <AddMoviePartI values={ addMovieP1 } updateState={ this.updateState } />
      </form>
    );
  }
}

export default AddMovie;
