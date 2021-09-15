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

  changeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  changeSubtitle = (event) => {
    this.setState({
      subtitle: event.target.value,
    });
  }

  changeImage = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
  }

  changeStoryLine = (event) => {
    this.setState({
      storyline: event.target.value,
    });
  }

  changeRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  }

  changeGenre = (event) => {
    this.setState({
      genre: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
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
        <label htmlFor="Título">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.changeTitle }
          />
        </label>
        <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.changeSubtitle }
          />
        </label>
        <label htmlFor="Imagem" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.changeImage }
          />
        </label>
        <label htmlFor="Sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            cols="30"
            rows="10"
            data-testid="storyline-input"
            onChange={ this.changeStoryLine }
          >
          </textarea>
        </label>
        <label htmlFor="Avaliação" data-testid="rating-input-label">
          Avaliação
          <input type="number" value={ rating } onChange={ this.changeRating } />
        </label>
        <label htmlFor="Gênero" data-testid="genre-input-label">
          Gênero
          <select value={ genre } data-testid="genre-input" onChange={ this.changeGenre }>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
