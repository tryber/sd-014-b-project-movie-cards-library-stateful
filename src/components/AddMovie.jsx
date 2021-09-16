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
    };
  }

  handleChange =(event) => {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="Título" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              type="text"
              onChange={ this.handleChange }
              value={ title }
            />
          </label>
          <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
            Subtítulo
            <input
              data-testid="subtitle-input"
              type="text"
              onChange={ this.handleChange }
              value={ subtitle }
            />
          </label>
          <label htmlFor="Imagem" data-testid="image-input-label">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              onChange={ this.handleChange }
              value={ imagePath }
            />
          </label>
          <label htmlFor="Sinopse" data-testid="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
              type="text"
              value={ storyline }
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <div>
          { rating }
          { genre }
        </div>
      </section>
    );
  }
}

export default AddMovie;
