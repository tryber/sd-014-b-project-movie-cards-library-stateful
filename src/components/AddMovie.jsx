import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);

    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: '',
    // };
  }

  onClick(event) {
    console.log(event.target.value);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="tituloNovo" data-testid="title-input-label">
          Título
          <input
            id="tituloNovo"
            type="text"
            data-testid="subtitle-input"
            // value={ this.state.title }
            onChange={ this.onClick }
          />
        </label>
        <label htmlFor="subtituloNovo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtituloNovo"
            type="text"
            data-testid="title-input"
            // value={ this.state.subtitle }
            onChange={ this.onClick }
          />
        </label>
        <label htmlFor="imagemNovo" data-testid="image-input-label">
          Imagem
          <input
            id="imagemNovo"
            data-testid="image-input"
            // value={ this.state.imagePath }
            onChange={ this.onClick }
          />
        </label>
        <label htmlFor="sinopseNovo" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="sinopseNovo"
            // value={ this.state.storyline }
            data-testid="storyline-input"
            onChange={ this.onClick }
          />
        </label>
        <label htmlFor="avaliaNovo" data-testid="rating-input-label">
          Avaliação
          <input
            id="avaliaNovo"
            type="number"
            // value={ this.state.rating }
            data-testid="rating-input"
            onChange={ this.onClick }
          />
        </label>
        <label htmlFor="generoNovo" data-testid="genre-input-label">
          Gênero
          <select
            id="generoNovo"
            // value={ this.state.genre }
            data-testid="genre-input"
            onChange={ this.onClick }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="Suspense" data-testid="genre-option">thriller</option>
          </select>
        </label>
        {/* <button data-testid="send-button" onClick="">Adicionar filme</button> */}
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
