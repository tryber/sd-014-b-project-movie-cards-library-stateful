import React from 'react';
import PropTypes from 'prop-types';

class InputGenreRating extends React.Component {
  render() {
    const { genre, onChange, rating } = this.props;
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            name="rating"
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ onChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

InputGenreRating.propTypes = {
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGenreRating;
