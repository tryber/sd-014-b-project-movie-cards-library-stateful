import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddSelect extends Component {
  render() {
    const { dfValue, onChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="select-input-label">
        <select
          value={ dfValue }
          id="selectedGenre"
          data-testid="select-input"
          onChange={ onChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
        Filtrar por gênero
      </label>
    );
  }
}

AddSelect.propTypes = {
  dfValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
