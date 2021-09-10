import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedGenreBar extends Component {
  render() {
    const { onSelectedGenreChange, selectedGenre } = this.props;
    console.log(selectedGenre);
    return (
      <div>
        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="selectedGenre"
            name="selectedGenre"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectedGenreBar.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SelectedGenreBar;
