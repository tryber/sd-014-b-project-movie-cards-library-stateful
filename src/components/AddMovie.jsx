import React from 'react';
import PropTypes from 'prop-types';
import TitleSubtitle from './form-AddMovie/TItleSubtitle';
import ImaStoryli from './form-AddMovie/ImagepathStoryline';

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
    this.addState = this.addState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  addState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      subtitle, title, imagePath,
      storyline, rating, genre,
    } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <TitleSubtitle subtitle={ subtitle } addState={ this.addState } title={ title } />
        <ImaStoryli addState={ this.addState } image={ imagePath } story={ storyline } />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ this.addState }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.addState }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button
            data-testid="send-button"
            type="button"
            onClick={ () => onClick(this.state, this.resetState()) }
          >
            Adicionar filme
          </button>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
