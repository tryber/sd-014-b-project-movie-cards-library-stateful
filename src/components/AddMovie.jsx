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
    if (target.id === 'image') {
      this.setState({
        [target.id]: target.value,
      });
    }
    if (target.id === 'story') {
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
            name="a"
            type="text"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" id="image" value={ imagePath } onClick={ onClick } />
        </label>
        <label htmlFor="story">
          Sinpse
          <input type="text" id="story" value={ storyline } onClick={ onClick } />
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
