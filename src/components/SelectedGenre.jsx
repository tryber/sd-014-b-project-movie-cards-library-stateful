import React from 'react';
import PropTypes from 'prop-types';

class SelectedGenre extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="select-input-label"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          id="select-input-label"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option
            data-testid="select-option"
            value=""
          >
            Todos
          </option>
          <option
            data-testid="select-option"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="select-option"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="select-option"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

SelectedGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SelectedGenre;
