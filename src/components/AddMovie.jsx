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
import TextInput from './TextInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';

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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange } = this;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          handleChange={ handleChange }
          value={ title }
          type="title"
          labelText="Título"
        />
        <TextInput
          handleChange={ handleChange }
          value={ subtitle }
          type="subtitle"
          labelText="Subtítulo"
        />
        <TextInput
          handleChange={ handleChange }
          value={ imagePath }
          type="image"
          labelText="Imagem"
        />
        <StorylineInput value={ storyline } handleChange={ handleChange } />
        <RatingInput value={ rating } handleChange={ handleChange } />
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            name="genre"
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>

    );
  }
}

addMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default addMovie;
