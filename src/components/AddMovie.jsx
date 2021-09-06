import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { InputWithLabel } from './InputWithLabel';

export class AddMovie extends Component {
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputWithLabel
          label="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
          dataTestid="title-input"
        />
        <InputWithLabel
          label="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          dataTestid="subtitle-input"
        />
        <InputWithLabel
          label="Imagem"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          dataTestid="image-input"
        />
        <InputWithLabel
          label="Sinopse"
          type="textarea"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          dataTestid="storyline-input"
        />
        <InputWithLabel
          label="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
          dataTestid="rating-input"
        />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-input"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>);
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
};

export default AddMovie;
