import React, { Component } from 'react';

export default class AddSelect extends Component {
  render() {
    const { dfValue, onChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="select-input-label">
        <select
          name={ dfValue }
          id="selectedGenre"
          data-testid="select-input"
          onChange={ onChange }
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        Filtrar por gênero
      </label>
    );
  }
}
