import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
    };
  }

  onSearchTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.onSearchTextChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.onSearchTextChange }
          />
        </label>
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
      </form>
    );
  }
}
AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
