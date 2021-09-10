import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  };

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titulo">
          Título
          <input
            type="text"
            id="titulo"
            name="title"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagem">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            id="imagem"
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
