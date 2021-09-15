/*
14 - Renderize um botão do formulário em <AddMovie /> para fazer uso dos dados do novo filme, contidos no estado de <AddMovie />

O botão precisa ter escrito o seguinte texto: "Adicionar filme";
O botão deve conter o atributo data-testid="send-button"
A propriedade onClick do botão invoca uma função definida por você, em <AddMovie />, que:
Executa a callback passada para o componente <AddMovie /> via props, chamada onClick, que recebe como parâmetro o estado atual de <AddMovie />;
Reseta o estado de <AddMovie />, voltando para o inicial, conforme mencionado anteriormente.

O que será verificado:

Será validado se o texto do botão é "Adicionar filme"
Será validado se o evento onClick é chamado ao se clicar no botão.
Será validado se o estado dos inputs volta ao inicial depois que o botão de adicionar é clicado.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="send-button"
          onClick={ onChange }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

ButtonAddMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
