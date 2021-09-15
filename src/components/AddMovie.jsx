import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';
import ButtonAddMovie from './ButtonAddMovie';

/*
 Requisito 8 - Renderize um input do tipo texto dentro do formulário em `<AddMovie />` para obter o título do novo filme
    Renderize um input de texto para quem usa escrever o titulo do filme
    Renderize a label "Título" para o input de titulo
    Defina o estado inicial do titulo como "", ou seja, uma string vazia
    Altere o valor do input de título quando algo for digitado nele
*/

class AddMovie extends React.Component {
  constructor() {
    super();

    // Estado inicial conforme requisito:
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    // "Ligar" (bind) função de event ao this
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = (onClick) => {
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
    // Estado do componente
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } onChange={ this.handleChange } />
        <InputSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <InputImage imagePath={ imagePath } onChange={ this.handleChange } />
        <InputStoryline storyline={ storyline } onChange={ this.handleChange } />
        <InputRating rating={ rating } onChange={ this.handleChange } />
        <InputGenre genre={ genre } onChange={ this.handleChange } />
        <ButtonAddMovie onClick={ () => this.handleClick(onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
