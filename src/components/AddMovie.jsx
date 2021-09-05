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
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    if (target.id === 'title') {
      this.setState({
        [target.id]: target.value,
      });
    }
    if (target.id === 'subtitle') {
      this.setState({
        [target.id]: target.value,
      });
    }
    if (target.id === 'imagePath') {
      this.setState({
        [target.id]: target.value,
      });
    }
    if (target.id === 'storyline') {
      this.setState({
        [target.id]: target.value,
      });
    }
    if (target.id === 'rating') {
      this.setState({
        [target.id]: target.value,
      });
    }
    if (target.id === 'genre') {
      this.setState({
        [target.id]: target.value,
      });
    }
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            type="textArea"
            id="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }/>
        </label>
        <label htmlFor="rating">
          Avaliação
          <input type="number" id="rating" value={ rating } onClick={ onClick } />
        </label>
        <label htmlFor="genre">
          Gênero
          <input type="text" id="genre" value={ genre } onClick={ onClick } />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
