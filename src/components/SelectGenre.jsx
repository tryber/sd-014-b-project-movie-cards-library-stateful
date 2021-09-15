import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="movie-genre" data-testid="genre-input-label">
        <p>Gênero</p>
        <select
          name="genre"
          id="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectGenre;
