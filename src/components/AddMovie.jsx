import React from 'react';

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
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [ name ]: value,
    })
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input id="title-input" name="title" data-testid="title-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input id="subtitle-input" name="subtitle" data-testid="subtitle-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input id="image-input" name="imagePath" data-testid="image-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea id="storyline-input" name="storyline" data-testid="storyline-input" onChange={ this.handleChange } />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input type="number" id="rating-input" name="rating" data-testid="rating-input" value={ this.state.rating } onChange={ this.handleChange } />
        </label>
      </form>
    );
  }
}

export default AddMovie;
