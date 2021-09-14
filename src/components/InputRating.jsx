/*
12 - Renderize um input do tipo number dentro do formulário em <AddMovie /> para obter a avaliação do novo filme

O input deve ter uma label associada com o texto: "Avaliação";
Essa label deve apresentar o atributo data-testid="rating-input-label"
O input deve ter seu valor inicial provido pelo estado inicial do componente, via rating;
Essa input deve apresentar o atributo data-testid="rating-input"
A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a rating a avaliação atual continda no input.

O que será verificado:

Será validado se o componente renderiza um input de texto para quem usa escrever a avaliação do filme
Será validado se o componente renderiza a label "Avaliação" para o input de avaliação
Será validado se o estado inicial do input de avaliação é 0
Será validado se o valor do input de avaliação muda quando algo é digitado por quem usa
*/

import React, { Component } from 'react';

class InputRating extends Component {
  render() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input type="number" data-testid="rating-input" />
      </label>
    );
  }
}

export default InputRating;
