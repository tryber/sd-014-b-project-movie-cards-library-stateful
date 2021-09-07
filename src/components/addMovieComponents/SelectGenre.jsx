import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Selectgenre extends Component {
  render() {
    const { initValue, change } = this.props;
    return (
      <label htmlFor="film-select-form" data-testid="genre-input-label">
        Gênero
        <select
          id="film-select-form"
          name="genre"
          value={ initValue }
          onChange={ change }
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

Selectgenre.propTypes = {
  initValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Selectgenre;
