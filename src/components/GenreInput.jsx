import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            type="genre"
            name="genre"
            value={ genre }
            onChange={ handleChange }
            data-testid="genre-input"
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

GenreInput.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default GenreInput;
