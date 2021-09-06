import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checkbox : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        <form data-testid="add-movie-form">
          <label
            htmlFor="title"
            data-testid="title-input-label">Título
            <input
              data-testid="title-input"
              type="text"
              id="title"
              name="title"
              value={ this.state.title }
              onChange={ this.handleChange }
            />
          </label>

          <label
            htmlFor="subtitle"
            data-testid="subtitle-input-label">Subtítulo
            <input
              data-testid="subtitle-input"
              type="text"
              id="subtitle"
              name="subtitle"
              value={ this.state.subtitle }
              onChange={ this.handleChange }
            />
          </label>

          <label
            htmlFor="image"
            data-testid="image-input-label">Imagem
            <input
              data-testid="image-input"
              type="text"
              id="image"
              name="imagePath"
              value={ this.state.imagePath }
              onChange={ this.handleChange }
            />
          </label>

          <label
            htmlFor="storyline"
            data-testid="storyline-input-label">Sinopse
            <textarea
              data-testid="storyline-input"
              type="text"
              id="storyline"
              name="storyline"
              value={ this.state.storyline }
              onChange={ this.handleChange }
            />
          </label>

          <label
            htmlFor="rating"
            data-testid="rating-input-label">Avaliação
            <input
              data-testid="rating-input"
              type="number"
              id="rating"
              name="rating"
              value={ this.state.rating }
              onChange={ this.handleChange }
            />
          </label>

          <label
            htmlFor="genre"
            data-testid="genre-input-label">Gênero
            <select
              data-testid="genre-input"
              id="genre"
              name="genre"
              value={ this.state.genre }
              onChange={ this.handleChange }
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>

          </label>
        </form>

        <button
          type="button"
        > add filme </button>
      </section>
    );
  }
}

export default AddMovie;
