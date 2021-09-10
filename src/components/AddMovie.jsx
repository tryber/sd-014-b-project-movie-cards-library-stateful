import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddTitle';
import AddSub from './AddSub';
import AddImage from './AddImage';

const INITIAL_STATE = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.addTitle = this.addTitle.bind(this);
    this.addSubtitle = this.addSubtitle.bind(this);
    this.addImagePath = this.addImagePath.bind(this);
    this.addStoryline = this.addStoryline.bind(this);
    this.addGenre = this.addGenre.bind(this);
    this.addRating = this.addRating.bind(this);

    this.state = INITIAL_STATE;
  }

  handleSubmit(event, callback) {
    event.preventDefault();
    callback(this.state);
    this.setState(INITIAL_STATE);
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
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <AddTitle title={ title } onChange={ this.addTitle } />
        <AddSub subtitle={ subtitle } onChange={ this.addSubtitle } />
        <AddImage imagePath={ imagePath } onChange={ this.addImagePath } />
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
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => this.handleSubmit(event, onClick) }
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
