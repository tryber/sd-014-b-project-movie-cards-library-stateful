import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <section>
        <label
          htmlFor="selectGenre"
          data-testid="select-input-label"
        >
          <select
            data-testid="genre-input"
            name="selectGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            Filtrar por genero
            <option data-testid="selected-option" value="">Todos</option>
            <option data-testid="selected-option" value="action">Ação</option>
            <option data-testid="selected-option" value="comedy">Comédia</option>
            <option data-testid="selected-option" value="Thriller">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

Select.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default Select;
