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

  changeState = (event) => {
    const { key, value } = event.target;
    this.setState({ [key]: value });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            value={ title }
            type="text"
            data-testid="title-input"
            onChange={ this.changeState }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            value={ subtitle }
            type="text"
            data-testid="subtitle-input"
            onChange={ this.changeState }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="image-input-label">
          Imagem
          <input
            value={ imagePath }
            type="text"
            data-testid="image-input"
            onChange={ this.changeState }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
