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

    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    });
  }

  render() {
    const { state } = this;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ state.title }
              onChange={ this.addMovie }
              data-testid="title-input"
              id="title-input"
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ state.subtitle }
              onChange={ this.addMovie }
              data-testid="subtitle-input"
              id="subtitle-input"
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="image"
              value={ state.imagePath }
              onChange={ this.addMovie }
              data-testid="image-input"
              id="image-input"
            />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline" 
              value={ state.storyline } 
              onChange={ this.addMovie }
              data-testid="storyline-input"
              id="storyline-input"
            />
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating" 
              value={ state.rating } 
              onChange={ this.addMovie }
              data-testid="rating-input"
              id="rating-input"
            />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select name="genre" id="genre-input" value={state.genre} data-testid="genre-input" onChange={this.addMovie}>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default AddMovie;
