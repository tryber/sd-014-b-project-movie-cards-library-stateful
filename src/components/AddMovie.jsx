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

  handleChange(event) {
    this.setState({
      subtitle: event.target.value,
      title: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input type="text" value={ this.state.title } data-testid="title-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" value={ this.state.subtitle } data-testid="subtitle-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input type="text" value={ this.state.imagePath } data-testid="image-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea value={ this.state.storyline } data-testid="storyline-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input type="number" value={ this.state.rating } data-testid="rating-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select value={ this.state.genre } data-testid="genre-input" onChange={ this.handleChange }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
