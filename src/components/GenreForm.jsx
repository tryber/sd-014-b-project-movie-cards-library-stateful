import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { value, handleMovie } = this.props;

    return (
      <label htmlFor="control4" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          onChange={ handleMovie }
          value={ value }
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
  handleMovie: PropTypes.func.isRequired,
};

export default Genre;
