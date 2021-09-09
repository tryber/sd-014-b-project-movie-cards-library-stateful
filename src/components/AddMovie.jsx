// implement AddMovie component here
import React from 'react';

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

    this.handleChange = this.handleChange.bind(this);
  }

  // Recebi ajuda da colega de turma Bel Albuquerque, para desenvolver o setState da função handleChange.
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input name="title" type="text" value={ title } data-testid="title-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input name="subtitle" type="text" value={ subtitle } data-testid="subtitle-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input name="imagePath" type="text" value={ imagePath } data-testid="image-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline" value={ storyline } data-testid="storyline-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input name="rating" type="number" value={ rating } data-testid="rating-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select name="genre" value={ genre } data-testid="genre-input" onChange={ this.handleChange }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
