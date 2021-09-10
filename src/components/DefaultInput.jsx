import React from 'react';
import PropTypes from 'prop-types';

class InputDefault extends React.Component {
  render() {
    const { describe, id, name, value, testid, testidLabel, handleChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ testidLabel }>
        { describe }
        <input
          id={ id }
          name={ name }
          value={ value }
          data-testid={ testid }
          onChange={ handleChange }
          type="text"
        />
      </label>
    );
  }
}

InputDefault.propTypes = {
  describe: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  testidLabel: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputDefault;

/*
Como o AddMovie ficou muito extenso devemos fazer um input padrão que servirá como máscara para os demais
Ele será um componente de classe também
adicionamos todas as props que utilizamos no addmovie
começamos igual nossos campos com label
o detalhe é que todos os campos que seriam chumbados serão dinâmicos
fazendo referẽncia com sua devida propriedade, por ex.: id = {id}, name={name}
e assim por diante
fazemos o proptype pro lint não ficar reclamando
e para validar cada tipo de entrada das props usadas
e já adicionamos como campos obrigatórios.
*/
