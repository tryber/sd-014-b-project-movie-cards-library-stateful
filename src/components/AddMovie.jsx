// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMoviePartI from './AddMoviePartI';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
  }

  send = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  }

  updateState({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddMoviePartI
          func={ this.updateState }
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          storyline={ storyline }
        />
        <label htmlFor="rating-input" data-testid="rating-input-label">
          <h6>Avaliação</h6>
          <input
            value={ rating }
            type="number"
            data-testid="rating-input"
            onChange={ this.updateState }
            name="rating"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          <h6>Gênero</h6>
          <select
            onChange={ this.updateState }
            data-testid="genre-input"
            value={ genre }
            name="genre"
          >
            <option value="action" data-testid="genre-option"> Ação </option>
            <option value="comedy" data-testid="genre-option"> Comédia </option>
            <option value="thriller" data-testid="genre-option"> Suspense </option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.send }
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
