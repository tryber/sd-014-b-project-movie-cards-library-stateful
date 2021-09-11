import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreFilter extends Component {
  render() {
    const { selectedGenre, onChange } = this.props;

    return (
      <section className="field">
        <label
          className="label genre-select"
          htmlFor="select-input"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <div className="select is-rounded">
            <select
              name="selectedGenre"
              id="select-input"
              value={ selectedGenre }
              onChange={ onChange }
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </div>
        </label>
      </section>
    );
  }
}

GenreFilter.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenreFilter;
