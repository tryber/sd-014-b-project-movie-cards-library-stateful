// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
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
    const { addMovie } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="subtitle" data-testid="title-input-label">
          Título
          <input
            id="title"
            name="title"
            value={ title }
            type="text"
            data-testid="title-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <button type="submit" onClick={ addMovie }>Adicionar</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
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
*/
