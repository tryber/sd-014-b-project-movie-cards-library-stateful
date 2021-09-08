import React from 'react';
// import SelectForm from './SelectForm';

class AddMovies extends React.Component {
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
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            data-testid="title-input"
            type="text"
            name="title"
            id="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        {/* <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            id="imagePath"
            value={ imagePath }
          />
        </label>
        <label htmlFor="rating">
          Nota:
          <input type="number" name="rating" id="rating" value="" />
        </label>
        <label htmlFor="storyline">
          Sinopse:
          <textarea name="storyline" id="storyline" value="" />
        </label>
        <SelectForm /> */}
      </form>
    );
  }
}

export default AddMovies;
