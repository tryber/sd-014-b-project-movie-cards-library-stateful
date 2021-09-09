import React from 'react';
// import PropTypes from 'prop-types';
import AddTitle from './AddMoviesComp/AddTitle';
import AddSub from './AddMoviesComp/AddSub';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.addTitle = this.addTitle.bind(this);
    this.addSubtitle = this.addSubtitle.bind(this);
    this.addImagePath = this.addImagePath.bind(this);
    this.addStoryline = this.addStoryline.bind(this);
    this.addGenre = this.addGenre.bind(this);
    this.addRating = this.addRating.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  addTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  addSubtitle(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  addImagePath(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  addStoryline(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  addRating(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  addGenre(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTitle title={ title } onChange={ this.addTitle } />
        <AddSub subtitle={ subtitle } onChange={ this.addSubtitle } />
        <label data-testid="subtitle-input-label" htmlFor="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input-label"
            value={ imagePath }
            onChange={ this.addImagePath }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.addStoryline }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.addRating }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select value={ genre } onChange={ this.addGenre } data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.onClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   rating: PropTypes.string.isRequired,
//   storyline: PropTypes.string.isRequired,
//   genre: PropTypes.string.isRequired,
// };
