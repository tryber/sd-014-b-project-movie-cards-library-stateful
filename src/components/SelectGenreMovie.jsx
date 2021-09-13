import React from 'react';
import PropTypes from 'prop-types';

class SelectGenreMovie extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label
        htmlFor="genre-input-label"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          id="genre-input"
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenreMovie.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectGenreMovie;
