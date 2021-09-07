import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <p>Inclui o texto:</p>
        <input type="text" placeholder="Inclui o texto" />
        <br />
        <label htmlFor="show-only-favorites">
          <input type="checkbox" name="show-only-favorites" id="show-only-favorites" />
          Mostrar somente favoritos
        </label>
        <p>Filtrar por gênero</p>
        <select>
          <option value="">Selecione um filtro</option>
          <option value="action">Ação</option>
        </select>
      </div>
    );
  }
}

export default SearchBar;
