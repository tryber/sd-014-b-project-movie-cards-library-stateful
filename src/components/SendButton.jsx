/*
14 - Renderize um botão do formulário em <AddMovie /> para fazer uso dos dados do novo filme, contidos no estado de <AddMovie />
O botão precisa ter escrito o seguinte texto: "Adicionar filme";

O botão deve conter o atributo data-testid="send-button"

A propriedade onClick do botão invoca uma função definida por você, em <AddMovie />, que:

Executa a callback passada para o componente <AddMovie /> via props, chamada onClick, que recebe como parâmetro o estado atual de <AddMovie />;
Reseta o estado de <AddMovie />, voltando para o inicial, conforme mencionado anteriormente.
*/

import React, { Component } from 'react';

class SendButton extends Component {
  render() {
    return (
      <div>
        <button type="button" data-testid="send-button">Adicionar filme</button>
      </div>
    );
  }
}

export default SendButton;
