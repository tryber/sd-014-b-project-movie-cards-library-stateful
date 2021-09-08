import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddMoviesComp/AddTitle';
import AddSub from './AddMoviesComp/AddSub';

export default class AddMovie extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props;
    return (
      <form data-testid="add-movie-form">
        <AddTitle title={ title } />
        <AddSub subtitle={ subtitle } />
        <label data-testid="subtitle-input-label" htmlFor="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input-label"
            value={ imagePath }
            onChange={ () => {} }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ () => {} }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ () => {} }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select value={ genre } onChange={ () => {} } data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ () => {} }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};
