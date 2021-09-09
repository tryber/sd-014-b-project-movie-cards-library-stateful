import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }

    this.handleState = this.handleState.bind(this);

  }

  handleState({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {

    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input 
            type="text"
            id="title"
            onChange={ this.handleState }
            value={ title }
            data-testid="title-input"
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input 
            type="text"
            id="subtitle"
            onChange={ this.handleState }
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input 
            type="text"
            id="imagePath"
            onChange={ this.handleState }
            value={ imagePath }
            data-testid="image-input"
          />
        </label>

        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input 
            type="text"
            id="storyline"
            onChange={ this.handleState }
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
