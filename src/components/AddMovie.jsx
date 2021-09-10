/* eslint-disable max-lines-per-function */
// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputDefault from './InputDefault';

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

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  resetState = (callback) => {
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, imagePath, storyline, rating, genre, subtitle } = this.state;
    return (
      <form action="" data-testid="add-movie-form">

        <InputDefault
          title={ title }
          description="Título"
          handleChange={ this.handleChange }
        />

        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating-input"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-input"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.resetState(onClick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onCLick: PropTypes.func,
}.isRequired;

export default AddMovie;
