import React, { Component } from 'react'

export default class Genre extends Component {
  render() {
    const{ genre, onChange } = this.props;

    return (
      <label htmlFor="" data-testid="genre-input-label">
        Gênero
        <select value={ genre } name="" id="" data-testid="genre-input" onChange={ onChange }>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
    </label>
    )
  }
}
