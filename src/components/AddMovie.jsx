import React from 'react';
import PropTypes from 'prop-types';
import GenreAdd from './GenreAdd';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      bookmarked: false,
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputTitle = this.inputTitle.bind(this);
    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.inputImagePath = this.inputImagePath.bind(this);
    this.inputRating = this.inputRating.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { onClick } = this.props;
    onClick(this.state);
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <GenreAdd
        label="Título"
        name="title"
        type="text"
        value={ title }
        handleChange={ this.handleChange }
        dataTestId="title-input"
        id="title"
      />
    );
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <GenreAdd
        label="Subtítulo"
        name="subtitle"
        type="text"
        value={ subtitle }
        handleChange={ this.handleChange }
        dataTestId="subtitle-input"
        id="subtitle"
      />
    );
  }

  inputImagePath() {
    const { imagePath } = this.state;
    return (
      <GenreAdd
        label="Imagem"
        name="imagePath"
        type="text"
        value={ imagePath }
        handleChange={ this.handleChange }
        dataTestId="image-input"
        id="imagePath"
      />
    );
  }

  inputRating() {
    const { rating } = this.state;
    return (
      <GenreAdd
        label="Avaliação"
        name="rating"
        type="number"
        value={ rating }
        handleChange={ this.handleChange }
        dataTestId="rating-input"
        id="rating"
      />
    );
  }

  render() {
    const { storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.inputTitle()}
        {this.inputSubtitle()}
        {this.inputImagePath()}
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            id="storyline"
          />
        </label>
        {this.inputRating()}
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
            id="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.handleSubmit }
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
