import React from 'react';
import PropTypes from 'prop-types';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  formTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input-label" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  formSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  formImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input-label" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  formTextarea() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <textarea
          /* name="storyline-input" */
          /*           id="storyline-input"
          cols="30"
          rows="10" */
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  formRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  formGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
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
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.formTitle() }
        { this.formSubtitle() }
        { this.formImage() }
        { this.formTextarea() }
        { this.formRating() }
        { this.formGenre() }
        <button
          type="button"
          data-testid="send-button"
          //lógica do onClick usada a partir do comentário de thiago frozzi no slack
          onClick={ () => {
            onClick(this.state);
            this.setState({
              subtitle: '',
              title: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
            });
          } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
