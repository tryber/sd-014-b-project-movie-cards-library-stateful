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
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title">
          Título
          <input type="text" id="title" value={ title } />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" id="subtitle" value={ subtitle } />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" id="image" value={ imagePath } />
        </label>
        <label htmlFor="story">
          Sinpse
          <input type="text" id="story" value={ storyline } />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input type="number" id="rating" value={ rating } />
        </label>
        <label htmlFor="genre">
          Gênero
          <input type="text" id="genre" value={ genre } />
        </label>

      </form>

    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
