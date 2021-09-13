import React from 'react';
import InputPadrao from './InputPadrao';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      genre: 'action',
    };
  }

  onSearchTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputPadrao
          dataid="title-input-label"
          name="title"
          description="Título"
          id="title-input"
          value={ title }
          handleChange={ this.onSearchTextChange }
        />
        <InputPadrao
          dataid="subtitle-input-label"
          name="subtitle"
          description="Subtítulo"
          id="subtitle-input"
          value={ subtitle }
          handleChange={ this.onSearchTextChange }
        />
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            onChange={ this.onSearchTextChange }
            value={ imagePath }
            name="imagePath"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.onSearchTextChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select onChange={ this.onSearchTextChange } data-testid="genre-input" name="genre" value={ genre } htmlFor="genre-option">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
