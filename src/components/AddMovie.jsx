import React from 'react';
import AddMovieFirstPart from './AddMovieFirstPart';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      // bookMarked: null,
      genre: 'action',
    };
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
    const secondPart = [storyline, rating, genre];

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <AddMovieFirstPart values={ secondPart } handleChange={ this.handleChange } />
        <input type="button" data-testid="send-button" value="Adicionar filme" />
      </form>
    );
  }
}

export default AddMovie;
