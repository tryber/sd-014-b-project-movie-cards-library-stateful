import React from 'react';
import PropTypes from 'prop-types';
import Parte1 from './Parte1';
import Parte2 from './Parte2';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => { // funcao tirada do course generica como tem arrow function nao precisa do this
    const { name, value } = target;
    this.setState({
      [name]: value, // o valor da variavel ser o nome da chave do objeto
    });
  }

  Reset = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({ // resetando tudo para ficar com o estado inicial
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
        <Parte1
          title={ title }
          onChange={ this.handleChange }
          subtitle={ subtitle }
          imagePath={ imagePath }
        />
        <Parte2
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.Reset }
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
export default AddMovie;
