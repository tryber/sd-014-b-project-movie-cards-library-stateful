import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: '',
      genre: ''
    }
  }
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input data-testid="title-input" onChange={"titulo"} type="text" value={this.state.title}/>
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input data-testid="subtitle-input" onChange={"subtitulo"} type="text" value={this.state.title}/>
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" onChange={"imagePath"} type="text" />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" onChange="storyline" />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input data-testid="rating-input" onChange="rating" type="number" />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" onChange={"genreValue"} value={"genre"}>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label >
          <input data-testid="send-button" type="button" onClick={"addmovie"} value="Adicionar filme" />
      </form>
    );
  }
}

export default AddMovie;
