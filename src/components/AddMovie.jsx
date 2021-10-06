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
    this.handleOnClickEvent = this.handleOnClickEvent.bind(this);
    this.renderTitleSubtitleInputs = this.renderTitleSubtitleInputs.bind(this);
    this.renderImageStorylineInputs = this.renderImageStorylineInputs.bind(this);
    this.renderRatingGenreInputs = this.renderRatingGenreInputs.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleOnClickEvent() {
    const { onClick } = this.props;
    onClick(this.state);
    console.log(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitleSubtitleInputs() {
    const { subtitle, title } = this.state;
    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ this.handleInputChange }
          />
        </label>
      </div>
    );
  }

  renderImageStorylineInputs() {
    const { imagePath, storyline } = this.state;
    return (
      <div>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            type="textarea"
            value={ storyline }
            onChange={ this.handleInputChange }
          />
        </label>
      </div>
    );
  }

  renderRatingGenreInputs() {
    const { rating, genre } = this.state;
    return (
      <div>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={ rating }
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleInputChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitleSubtitleInputs() }
        { this.renderImageStorylineInputs() }
        { this.renderRatingGenreInputs() }
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.handleOnClickEvent }
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
