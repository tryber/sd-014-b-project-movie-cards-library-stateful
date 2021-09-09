// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const allInputs = [
  {
    type: 'text',
    id: 'title',
    text: 'Título:',
    dataTestId: 'title-input',
  },
  {
    type: 'text',
    id: 'subtitle',
    text: 'Subtítulo:',
    dataTestId: 'subtitle-input',
  },
  {
    type: 'text',
    id: 'imagePath',
    text: 'Imagem:',
    dataTestId: 'image-input',
  },
  {
    type: 'text',
    id: 'storyline',
    text: 'Sinopse:',
    dataTestId: 'storyline-input',
  },
  {
    type: 'number',
    id: 'rating',
    text: 'Avaliação:',
    dataTestId: 'rating-input',
  },
];

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  createMovie() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const newMovie = {
        title: title,
        subtitle: subtitle,
        storyline:  storyline,
        rating: rating,
        imagePath: imagePath,
        bookmarked: false,
        genre: genre,
    }
    return newMovie;
  }

  handleSubmit(event, callback) {
    event.preventDefault();
    callback(this.createMovie);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Input func={ this.handleChange } input={ allInputs[0] } value={ title } />
          <Input func={ this.handleChange } input={ allInputs[1] } value={ subtitle } />
          <Input func={ this.handleChange } input={ allInputs[2] } value={ imagePath } />
          <Input func={ this.handleChange } input={ allInputs[3] } value={ storyline } />
          <Input func={ this.handleChange } input={ allInputs[4] } value={ rating } />
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
            onClick={ (event) => this.handleSubmit(event, onClick) }
            type="submit"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
