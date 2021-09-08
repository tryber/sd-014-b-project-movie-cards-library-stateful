import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { selected, onChange } = this.props;
    return (
      <label htmlFor="genre-select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="genre-select"
          name="selectedGenre"
          value={ selected }
          onChange={ onChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = PropTypes.shape({
  selected: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;

export default Select;
