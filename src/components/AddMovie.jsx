import React, { Component } from 'react';

class AddMovie extends Component {
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
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title-input"
            data-testid="title-input"
            onChange={ (event) => this.setState({ title: event.target.value }) }
          />
          {title}
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle-input"
            data-testid="subtitle-input"
            onChange={ (event) => this.setState({ subtitle: event.target.value }) }
          />
          {subtitle}
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            ype="text"
            name="image-input"
            data-testid="image-input"
            onChange={ (event) => this.setState({ imagePath: event.target.value }) }
          />
          {imagePath}
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline-input"
            data-testid="storyline-input"
            cols="30"
            rows="10"
            onChange={ (event) => this.setState({ storyline: event.target.value }) }
          >
            {storyline}
          </textarea>
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating-input"
            data-testid="rating-input"
            onChange={ (event) => this.setState({ rating: event.target.value }) }
          />
          {rating}
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre-input"
            data-testid="genre-input"
            value={ genre }
            onChange={ (event) => {
              this.setState({ genre: event.target.value });
            } }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
