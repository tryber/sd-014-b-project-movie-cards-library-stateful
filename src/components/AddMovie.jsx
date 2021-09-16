import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.state = this.initialState;
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          onChange={ (event) => this.setState({ title: event.target.value }) }
          value={ title }
          id="title"
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          onChange={ (event) => this.setState({ subtitle: event.target.value }) }
          value={ subtitle }
          id="subtitle"
        />
      </label>
    );
  }

  renderImageInput() {
    const { imagePath } = this.state;

    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          onChange={ (event) => this.setState({ imagePath: event.target.value }) }
          value={ imagePath }
          id="image"
        />
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          cols="30"
          rows="10"
          data-testid="storyline-input"
          type="text"
          onChange={ (event) => this.setState({ storyline: event.target.value }) }
          value={ storyline }
          id="sinopse"
        />
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          onChange={ (event) => this.setState({ rating: event.target.value }) }
          value={ rating }
          id="rating"
        />
      </label>
    );
  }

  renderGenreInput() {
    const { genre } = this.state;

    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          onChange={ (event) => this.setState({ genre: event.target.value }) }
          value={ genre }
          id="genre"
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
      <form action="" data-testid="add-movie-form">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImageInput()}
        {this.renderStorylineInput()}
        {this.renderRatingInput()}
        {this.renderGenreInput()}

        <button
          type="button"
          data-testid="send-button"
          onClick={ () => {
            onClick(this.state);
            this.setState(this.initialState);
          } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
