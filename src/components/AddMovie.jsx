import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      /* storyline: '',
      rating: 0,
      genre: 'action', */
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">
            Título
            <input
              data-testid="title-input"
              name="title"
              type="text"
              id="title-input"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
