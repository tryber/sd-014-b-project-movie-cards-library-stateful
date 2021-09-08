import React from 'react';
import PropTypes from 'prop-types';

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
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
    })
  }

  render() {
    /* const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.props; */

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          <h5>Título</h5>
          <input
            data-testid="title-input"
            value={ this.state.title }
            onChange={ this.handleChange }
            type="text"
          />
        </label >
        <label data-testid="subtitle-input-label">
          <h5>Subtítulo</h5>
          <input
            data-testid="subtitle-input"
            value={ this.state.subtitle }
            onChange={ this.handleChange }
            type="text"
          />
        </label>
        <label data-testid="image-input-label">
          <h5>Imagem</h5>
          <input
            data-testid="image-input"
            value={ this.state.imagePath }
            onChange={ this.handleChange }
            type="text"
          />
        </label>
        <label data-testid="storyline-input-label">
          <h5>Sinopse</h5>
          <textarea
            data-testid="storyline-input"
            value={ this.state.storyline }
            onChange={ this.handleChange }
            type="text"
          />
        </label>
      </form>
    )
  }
}

AddMovie.protoTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
}

export default AddMovie;
