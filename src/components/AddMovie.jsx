import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input name="title" data-testid="title-input" onChange={ this.handleChange } type="text" value={ this.state.title } />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input name="subtitle" data-testid="subtitle-input" onChange={ this.handleChange } type="text" value={ this.state.subtitle } />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label" >
          Imagem
          <input name="imagePath" data-testid="image-input" onChange={ this.handleChange } value={ this.state.imagePath }></input>
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline" data-testid="storyline-input" onChange={ this.handleChange } value={ this.state.storyline }>
          </textarea>
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input name="rating" data-testid="rating-input" type="number" onChange={ this.handleChange } value={ this.state.rating }></input>
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select name="genre" data-testid="genre-input" onChange={ this.handleChange } value={ this.state.genre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button data-testid="send-button" onClick={onClick}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;
