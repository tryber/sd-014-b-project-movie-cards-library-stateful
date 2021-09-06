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
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
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

export default AddMovie;
