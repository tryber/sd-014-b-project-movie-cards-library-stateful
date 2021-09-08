import React from 'react';
import PropTypes from 'prop-types';
import InputGlobal from './InputGlobal';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputGlobal
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          <h5>Sinopse</h5>
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
            type="text"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          <h5>Avaliação</h5>
          <input
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
            type="number"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          <h5>Gênero</h5>
          <select
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
            type="text"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        {/* <button data-testid="send-button" onClick={  }>Adicionar filme</button> */}
      </form>
    );
  }
}

AddMovie.protoTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovie;
