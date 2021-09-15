// implement AddMovie component here
/*
6 - Crie um componente chamado <AddMovie />
7 - Renderize um formulário dentro de <AddMovie />
8 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> para obter o título do novo filme
9 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> para obter o subtítulo do novo filme
10 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> para obter o caminho da imagem do novo filme
11 - Renderize uma textarea dentro do formulário em <AddMovie /> para obter a sinopse do novo filme
12 - Renderize um input do tipo number dentro do formulário em <AddMovie /> para obter a avaliação do novo filme
13 - Renderize um select do formulário em <AddMovie /> para selecionar o gênero do novo filme
14 - Renderize um botão do formulário em <AddMovie /> para fazer uso dos dados do novo filme, contidos no estado de <AddMovie />
 */
import React from 'react';
import PropTypes from 'prop-types';

class addMovie extends React.Component {
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

addMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default addMovie;
