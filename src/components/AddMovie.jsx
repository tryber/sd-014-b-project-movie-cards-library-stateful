import React from 'react';

class AddMovie extends React.Component {
  // constructor() {
  //   super();

  //   this.state={
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyLine: '',
  //     rating: '',
  //     genre: ''
  //   }
  // }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input id="title" data-testid="title-input" type="text" />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input id="subtitle" data-testid="subtitle-input" type="text" />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input id="image" data-testid="image-input" type="text" />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea id="storyline" data-testid="storyline-input" />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input id="rating" data-testid="rating-input" type="number" />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select id="genre" data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <input data-testid="send-button" type="button" />
      </form>
    );
  }
}

export default AddMovie;
