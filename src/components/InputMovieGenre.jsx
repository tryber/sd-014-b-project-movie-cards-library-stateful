import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMovieGenre extends Component {
  render() {
    const { value, funcaoAtualizaPai } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ value }
          onChange={ funcaoAtualizaPai }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputMovieGenre.propTypes = {
  value: PropTypes.bool.isRequired,
  funcaoAtualizaPai: PropTypes.func.isRequired,
};
export default InputMovieGenre;
