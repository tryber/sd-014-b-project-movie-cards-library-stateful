/*
13 - Renderize um select do formulário em <AddMovie /> para selecionar o gênero do novo filme
O select deve ter uma label associada com o texto: "Gênero";

Essa label deve apresentar o atributo data-testid="genre-input-label"
O select deve ter seu valor inicial provido pelo estado inicial do componente, via genre;
O select deve apresentar o atributo data-testid="genre-input"
A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a genre o gênero atual selecionado;

O select deve renderizar três tags option, com as opções de filtragem por gênero, na seguinte ordem:
Ação, com o valor action;
Comédia, com o valor comedy;
Suspense, com o valor thriller.
Cada option deve conter o atributo data-testid="genre-option"

O que será verificado:

Será validado se o componente renderiza um select com 3 opções de genero de filme
Será validado se o componente renderiza a label "Gênero" para o select de gênero
Será validado se todas as opções no select tem o texto e o valor esperados, que são, respectivamente: Ação e action, Comédia e comedy, Suspense e thriller
Será validado se o gênero selecionado inicialmente é o "action"
Será validado se o valor do gênero muda quando um gênero diferente é escolhido no select
*/

import React, { Component } from 'react';

class InputGenre extends Component {
  render() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default InputGenre;
