import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
O select deve ter uma label associada com o texto: "Filtrar por gênero";
Essa label deve apresentar o atributo data-testid="select-input-label"
A propriedade value do select deve receber o valor da prop selectedGenre;
A propriedade onChange do select deve receber o valor da prop onSelectedGenreChange;
O select deve renderizar quatro tags option, com as opções de filtragem por gênero, na seguinte ordem:

Todos, com o valor "";
Ação, com o valor action;
Comédia, com o valor comedy;
Suspense, com o valor thriller.
O select deve apresentar o atributo data-testid="select-input"

Cada option deve apresentar o atributo data-testid="select-option"
*/

class SelectedGenre extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            name="selectedGenre"
            id="genre"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectedGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SelectedGenre;
