import React from 'react';
import PropTypes from 'prop-types';

import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

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
    /*
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }; */

    this.props = {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      imagePath: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      genre: PropTypes.string,
    };
  }

  render() {
    // const { title, subtitle, imagePath, storyline, rating, genre } = this.props;

    // inputs value=props
    return (
      <div>
        <p>teste</p>
        <form data-testid="add-movie-form">

          <InputTitle value={ title } />
          <InputSubtitle value={ subtitle } />
          <InputImage value={ imagePath } />
          <InputStoryline value={ storyline } />
          <InputRating value={ rating } />
          <InputGenre value={ genre } />

        </form>
      </div>
    );
  }
}

export default AddMovie;
