import React from 'react';
// import PropTypes from 'prop-types';

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
    this.movieInformation = this.movieInformation.bind(this);
  }

  movieInformation = (event) => {
    const { name } = event.target;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            onChange={ this.movieInformation }
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title"
            onChange={ this.movieInformation }
            value={ title }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          caminho da imagem
          <input
            type="text"
            name="imagePath"
            id="imagePath"
            onChange={ this.movieInformation }
            value={ imagePath }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          sinopse
          <input
            name="storyline"
            type="text"
            id="storyline"
            onChange={ this.movieInformation }
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
        <labe htmlFor="rating" data-testid="rating-input-label">
          avaliação
          <input
            name="rating"
            type="number"
            id="rating"
            onChange={ this.movieInformation }
            value={ rating }
            data-testid="rating-input"
          />
        </labe>
        <label htmlFor="genre" data-testid="genre-input-label">
          gênero
          <input
            name="genre"
            type="text"
            id="genre"
            onChange={ this.movieInformation }
            value={ genre }
            data-testid="genre-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
