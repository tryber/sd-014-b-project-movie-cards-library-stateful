import React from 'react';

class GeneroNovo extends React.Component {
  render() {
    return (
      <label htmlFor="generoNovo" data-testid="genre-input-label">
        Gênero
        <select
          id="generoNovo"
          // value={ this.state.genre }
          data-testid="genre-input"
          onChange={ this.onClick }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default GeneroNovo;
