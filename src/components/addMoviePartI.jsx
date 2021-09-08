import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddMoviePartI extends Component {
  render() {
    const { values, updateState } = this.props;
    console.log(values[1]);
    return (
      <>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ values[0] }
            data-testid="storyline-input"
            onChange={ updateState }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ values[1] }
            data-testid="rating-input"
            onChange={ updateState }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ values[2] }
            data-testid="genre-input"
            onChange={ updateState }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </>
    );
  }
}

AddMoviePartI.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateState: PropTypes.func.isRequired,
};

export default AddMoviePartI;
