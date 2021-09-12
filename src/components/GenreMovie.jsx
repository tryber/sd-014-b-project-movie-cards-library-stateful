import React from 'react';
import PropTypes from 'prop-types';

class GenreMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="mb-3">
        <label
          className="form-label"
          data-testid="genre-input-label"
          htmlFor="genre-input"
        >
          Gênero
        </label>
        <select
          className="form-select"
          name="genre"
          value={ value }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </div>
    );
  }
}

GenreMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default GenreMovie;
