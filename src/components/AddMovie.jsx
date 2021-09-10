import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import AddRating from './AddRating';
import Genre from './Genre';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  } // Explicação no fim da página (1)

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <AddRating
          initialState={ rating }
          onChange={ (event) => this.setState({ rating: event.target.value }) }
        />
        <Genre value={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => this.handleClick() }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// (1) Em passos:
// 1 - Recebe o event e desestrutura para pegar só event.target, que agora é target.
// 2 - Do target pega target.name e target.value, desestruturando para name e value
// 3 - Em setState, desestrutura o item que tiver chave name, mudando o valor pra value
// É geral o suficiente para ser usado em diferentes lugares

// Fiquei um dia todo procurando o que tinha de errado no rating.
// Porque todos os requisitos passavam, menos o do 12, de colocar rating inicial como zero.
// No código de um colega (https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/blob/welton-movie-cards-library-stateful/src/components/AddMovie.jsx),
// reparei que ele fazia diferente. Inspirado na forma como ele fez, mudei meu código e deu certo.
