import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="MovieGenre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ value }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Genre;
