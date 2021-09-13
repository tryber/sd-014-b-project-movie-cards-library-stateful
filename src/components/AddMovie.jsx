import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input data-testid="title-input" />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input data-testid="subtitle-input" />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" />
        </label>
        <label htmlFor="textarea" data-testid="storyline-input-label">
          Sinopse
          <input data-testid="storyline-input" />
        </label>
        <label htmlFor="textarea" data-testid="rating-input-label">
          Avaliação
          <input
            defaultValue="0"
            type="number"
            data-testid="rating-input"
            // onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleChange }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
