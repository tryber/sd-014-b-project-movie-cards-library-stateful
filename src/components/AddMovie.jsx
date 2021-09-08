// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { addMovie } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="image-path" data-testid="image-input-label">
          Imagem
          <input
            id="image-path"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            name="rating"
            value={ rating }
            type="number"
            data-testid="rating-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="select-genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            id="select-genre"
            data-testid="genre-input"
            onChange={ this.handleInputChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={ addMovie }>Adicionar</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default AddMovie;
