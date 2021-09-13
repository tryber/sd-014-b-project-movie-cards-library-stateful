import React from 'react';
import RatingForm from './Storyline';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            onChange={ this.handleInputChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleInputChange }
            data-testid="subtitle-input"
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            alt=""
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleInputChange }
            data-testid="image-input"
          />
        </label>

        <label htmlFor="storyline " data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ this.handleInputChange }
            data-testid="storyline-input"
          />
        </label>
        <RatingForm rating={ rating } />
      </form>
    );
  }
}

export default AddMovie;
