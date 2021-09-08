// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            id="text-title"
            type="text"
            value={ title }
          />
        </label>
        <label htmlFor="title-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            id="text-subtitle"
            type="text"
            value={ subtitle }
          />
        </label>
        <label htmlFor="title-image" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            id="text-subtitle"
            type="text"
            value={ imagePath }
          />
        </label>
        <label htmlFor="title-image" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
