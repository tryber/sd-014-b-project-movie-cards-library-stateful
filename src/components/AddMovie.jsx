// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputDefault from './InputDefault';
import SelectGenre from './SelectGenre';

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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { addMovie } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputDefault
          describe="Título"
          id="title"
          name="title"
          value={ title }
          testid="title-input"
          testidLabel="title-input-label"
          handleChange={ this.handleInputChange }
        />
        <InputDefault
          describe="Subtítulo"
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          testid="subtitle-input"
          testidLabel="subtitle-input-label"
          handleChange={ this.handleInputChange }
        />
        <InputDefault
          describe="Imagem"
          id="image"
          name="imagePath"
          value={ imagePath }
          testid="image-input"
          testidLabel="image-input-label"
          handleChange={ this.handleInputChange }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            name="rating"
            value={ rating }
            type="number"
            data-testid="rating-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <SelectGenre
          describe="Gênero"
          id="genre"
          name="genre"
          value={ genre }
          testid="genre-input"
          testidLabel="genre-input-label"
          handleChange={ this.handleInputChange }
        />
        <button type="submit" data-testid="send-button" onClick={ addMovie }>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default AddMovie;
