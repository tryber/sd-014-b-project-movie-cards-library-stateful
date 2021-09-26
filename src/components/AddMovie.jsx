import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input type="text" data-testid="title-input" />
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" data-testid="subtitle-input" />
        </label>
        <label htmlFor="image-input-label" data-testid="image-input-label">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline-input" id="storyline-input" cols="30" rows="10" data-testid="storyline-input" />
        </label>
        <label htmlFor="rating-input-label" data-testid="rating-input-label">
          Avaliação
          <input type="number" data-testid="rating-input" defaultValue={ 0 } />
        </label>
      </form>
    );
  }
}

export default AddMovie;
