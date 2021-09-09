import React from 'react';
import PropTypes from 'prop-types';

class Parte2 extends React.Component {
  render() {
    const { storyline, onChange, rating, genre } = this.props;
    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline"
            cols="30"
            rows="10"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ onChange }
          />
        </label>
        <div>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating"
              id="rating"
              value={ rating }
              data-testid="rating-input"
              onChange={ onChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              id="genre"
              name="genre"
              value={ genre }
              onChange={ onChange }
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
Parte2.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Parte2;
