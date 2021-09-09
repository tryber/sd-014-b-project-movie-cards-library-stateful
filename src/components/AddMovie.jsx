import React from 'react';
// import PropTypes from 'prop-types';

/*
 8 - Renderize um input do tipo texto dentro do formulário em `<AddMovie />` para obter o título do novo filme
    Renderize um input de texto para quem usa escrever o titulo do filme
    Renderize a label "Título" para o input de titulo
    Defina o estado inicial do titulo como "", ou seja, uma string vazia
    Altere o valor do input de título quando algo for digitado nele
*/

class AddMovie extends React.Component {
  /* constructor() {
    super();
    this.state = {
      /* subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action', */

  render() {
    return (
      <div>
        <p>teste</p>
        <form data-testid="add-movie-form">
          <p>teste</p>
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input type="text" data-testid="title-input" />
          </label>
        </form>
      </div>
    );
  }
}

/*
subtitle: guarda o subtítulo preenchido no formulário por quem usa a aplicação;
title: guarda o título preenchido no formulário por quem usa a aplicação;
imagePath: guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
storyline: guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
rating: guarda a nota de avaliação dada no formulário por quem usa a aplicação;
genre: guarda o gênero do filme selecionado no formulário por quem usa a aplicação.

*/
/*
AddMovie.PropTypes = {
  subtitles: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
};
*/
export default AddMovie;
