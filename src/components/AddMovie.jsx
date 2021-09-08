// implement AddMovie component here
import React from 'react';
import PropType from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre 
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="MovieTitle" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="MovieSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="MovieImage" data-testid="image-input-label">
          Imagem
          <input name="imagePath" value={ imagePath } onChange={ this.handleChange } data-testid="image-input" />
        </label>
      </form>
    );
  }
}

AddMovie.PropType = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
