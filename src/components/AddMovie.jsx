// implement AddMovie component here
import React, { Component } from 'react';
import AddMoviePartI from './AddMoviePartI';

export class AddMovie extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
  }

  updateState({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddMoviePartI
          func={ this.updateState }
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          storyline={ storyline }
        />
        <label htmlFor="rating-input" data-testid="rating-input-label">
          <h5>Avaliação</h5>
          <input
            value={ rating }
            type="number"
            data-testid="rating-input"
            onChange={ this.updateState }
            name="rating"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          <h5>Gênero</h5>
          <select
            onChange={ this.updateState }
            data-testid="genre-input"
            value={ genre }
            name="genre"
          >
            <option value="action" data-testid="genre-option"> Ação </option>
            <option value="comedy" data-testid="genre-option"> Comédia </option>
            <option value="thriller" data-testid="genre-option"> Suspense </option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
