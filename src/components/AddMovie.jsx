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
  };

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Titulo
          <input
            onChange={ this.handleChange }
            type="text"
            id="title"
            value={ title }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            onChange={ this.handleChange }
            type="text"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
          onChange={ this.handleChange }
          type="text"
          id="imagePath"
          value={ imagePath }
          data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline" data-testid="title-input-label">
          Sinopse
          <textarea
          onChange={ this.handleChange }
          value={ storyline }
          id="storyline"
          data-testid="storyline-input"
        />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            onChange={ this.handleChange }
            value={ rating }
            type="number"
            id="rating"
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            onChange={ this.handleChange }
            id="genre"
            value={ genre }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ onClick(this.state)  }>Adicionar filme</button>
      </form>
    );
  };
};

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddMovie;
