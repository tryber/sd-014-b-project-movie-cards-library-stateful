import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleState = this.handleState.bind(this);
    this.handleAddMovieButton = this.handleAddMovieButton.bind(this);
  }

  handleState({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  /*
  * Consultei o repositório de Thyara Nonato para resolver a função handleAddMovieButton
  * https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/blob/thyara-movie-cards-library-stateful/src/components/AddMovie.jsx
  */
  handleAddMovieButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">

        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            onChange={ this.handleState }
            value={ title }
            data-testid="title-input"
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            onChange={ this.handleState }
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="imagePath"
            onChange={ this.handleState }
            value={ imagePath }
            data-testid="image-input"
          />
        </label>

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            type="text"
            id="storyline"
            onChange={ this.handleState }
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating"
            onChange={ this.handleState }
            value={ rating }
            data-testid="rating-input"
          />
        </label>

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            onChange={ this.handleState }
            value={ genre }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleAddMovieButton }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

export default AddMovie;
