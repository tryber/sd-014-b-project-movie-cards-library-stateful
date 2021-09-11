import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Input from './Input';

class AddMovieInf extends Component {
  render() {
    const { handleInputs, storyline, rating, genre } = this.props;
    return (
      <>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ handleInputs }
          />
        </label>

        <Input
          description="Avaliação"
          dataTestIdLabel="rating-input-label"
          name="rating"
          type="number"
          value={ rating }
          dataTestIdInput="rating-input"
          onChange={ handleInputs }
        />

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            id="genre"
            name="genre"
            data-testid="genre-input"
            onChange={ handleInputs }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </>
    );
  }
}

AddMovieInf.propTypes = {
  handleInputs: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovieInf;
