import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label
            htmlFor="title"
            data-testid="title-input-label"
          >
            Título
            <input
              data-testid="title-input"
              type="text"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <label
            htmlFor="subtitle"
            data-testid="subtitle-input-label"
          >
            Subtítulo
            <input
              data-testid="subtitle-input"
              type="text"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
          <label
            htmlFor="image"
            data-testid="image-input-label"
          >
            Imagem
            <input
              type="text"
              alt={ title }
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

export default AddMovie;
