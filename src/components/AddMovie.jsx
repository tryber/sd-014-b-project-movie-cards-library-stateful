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
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <section>
          <label htmlFor="titleMovie" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              name="titleMovie"
              id="titleMovie"
              type="text"
              value={ title }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="subTitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              data-testid="subtitle-input"
              name="subTitle"
              id="subTitle"
              type="text"
              value={ subtitle }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="image" data-testid="image-input-label">
            Imagem
            <input
              data-testid="image-input"
              name="image"
              id="image"
              type="text"
              value={ imagePath }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <input
              data-testid="storyline-input"
              name="storyline"
              id="storyline"
              type="text"
              value={ storyline }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              data-testid="rating-input"
              name="rating"
              id="rating"
              type="number"
              value={ rating }
              onChange={ this.handleChange }
              max={ 5 }
              required
            />
          </label>
          <label htmlFor="genreNewMovie" data-testid="genre-input-label">
            Gênero
            <select
              id="genreNewMovie"
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChange }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </section>
      </form>
    );
  }
}

export default AddMovie;
