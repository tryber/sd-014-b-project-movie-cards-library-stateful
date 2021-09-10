// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import SelectGenre from './SelectGenre';
import InputTextArea from './InputTextArea';
import InputNumber from './InputNumber';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleInputChange }
        />
        <InputTextArea
          storyline={ storyline }
          handleChange={ this.handleInputChange }
        />
        <InputNumber
          rating={ rating }
          handleChange={ this.handleInputChange }
        />
        <SelectGenre
          describe="Gênero"
          id="genre"
          name="genre"
          value={ genre }
          testid="genre-input"
          testidLabel="genre-input-label"
          handleChange={ this.handleInputChange }
        />
        <button type="submit" data-testid="send-button" onClick={ onClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
/**
Requisito 6: devemos setar o estado inicial, com isso abrimos o constructor recebendo props
super para alterar o padrão recebendo as props
setamos o valor inicial dentro do this.state
dentro do render fazemos o formulário com a callback onclick ja no ponto de uso.
Requisito 7: só adicionar o atributo
Requisito 8: para que haja iteração entre o texto digitado e o estado fazemos o handleInputChange
que faz a verificaçao do checkbox primeiro
depois cuida dinamicamente do nome e valor dos nossos atributos
fazer o bind this do handleInputChange
criar botão de adicionar tipo submmit passando a props add movie no onclick
Requisito 9: para o subtítulo adicionamos a props a const dentro do render() e
fazemos o mesmo processo do title com as devidas alterações para subtitle
Requisito 10: mesmo procedimento anterior,
Requisito 11: mesmo anterior => 1º adicionar ao this.state,
2º adicionar na this.props, adicionar no value.
Requisito 12: mesma coisa dos anteriores.
<<< ATENÇÃO >>>
a partir de 50 linhas o lint já reclama do tamanho da função
então temos que fazer um input padrão, farei isso mais tarde
<<<<<>>>>>
Requitiso 13: mesma coisa dos outros usando select e options

Refatorando: importamos o componente input padrão
basicamente só mantemos as propriedades e adicionamos um describe que vai ser o
que vai aparecer no "label", esse valor é chumbado o resto é dinâmico.

Refatorando2: como cada componente foi isolado
*/
