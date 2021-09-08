import React from 'react';
import InputAddMovie from './InputAddMovie';
import InputAddRating from './InputAddRating';
import TextareaAddMovie from './TextareaAddMovie';
import SelectAddGenre from './SelectAddGenre';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" className="form-container">
          <InputAddMovie
            description="Título"
            name="title"
            value={ title }
            handleChange={ this.handleChange }
          />
          <InputAddMovie
            description="Subtítulo"
            name="subtitle"
            value={ subtitle }
            handleChange={ this.handleChange }
          />
          <InputAddMovie
            description="Imagem"
            name="imagePath"
            value={ imagePath }
            handleChange={ this.handleChange }
          />
          <TextareaAddMovie
            description="Sinopse"
            name="storyline"
            value={ storyline }
            handleChange={ this.handleChange }
          />
          <InputAddRating
            description="Avaliação"
            name="rating"
            value={ rating }
            handleChange={ this.handleChange }
          />
          <SelectAddGenre
            description="Gênero"
            name="genre"
            value={ genre }
            handleChange={ this.handleChange }
          />
          <button className="form-button" type="submit">Adicionar</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
