import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.firstPartForm = this.firstPartForm.bind(this);
    this.secondPartForm = this.secondPartForm.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [id]: value,
    });
  }

  firstPartForm() {
    const { title, subtitle, imagePath } = this.state;

    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            id="title"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            id="subtitle"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            id="imagePath"
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  secondPartForm() {
    const { storyline, rating, genre } = this.state;
    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            id="storyline"
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            id="rating"
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            id="genre"
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <this.firstPartForm />
          <this.secondPartForm />
          <button
            type="button"
            data-testid="send-button"
            onClick={ () => {
              onClick(this.state);
              this.setState(() => ({
                subtitle: '',
                title: '',
                imagePath: '',
                storyline: '',
                rating: 0,
                genre: 'action',
              }));
            } }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
