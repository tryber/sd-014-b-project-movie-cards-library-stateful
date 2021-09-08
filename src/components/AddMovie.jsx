// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const allInputs = [
  {
    type: 'text',
    id: 'title',
    text: 'Título',
    dataTestId: 'title-input',
  },
  {
    type: 'text',
    id: 'subtitle',
    text: 'subtítulo',
    dataTestId: 'subtitle-input',
  },
  {
    type: 'text',
    id: 'imagePath',
    text: 'Imagem',
    dataTestId: 'image-input',
  },
  {
    type: 'number',
    id: 'rating',
    text: 'Avaliação',
    dataTestId: 'rating-input',
  },
];

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
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input func={ this.handleChange } input={ allInputs[0] } value={ title } />
        <Input func={ this.handleChange } input={ allInputs[1] } value={ subtitle } />
        <Input func={ this.handleChange } input={ allInputs[2] } value={ imagePath } />
        <label htmlFor="storyline" data-testid="title-input-label">
          Sinopse
          <textarea
            onChange={ this.handleChange }
            value={ storyline }
            id="storyline"
            data-testid="storyline-input"
          />
        </label>
        <Input func={ this.handleChange } inputObject={ allInputs[3] } value={ rating } />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            onChange={ this.handleChange }
            id="genre"
            value={ genre }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          onClick={ onClick(this.state) }
          type="submit"
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
