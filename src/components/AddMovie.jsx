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
      /* rating: 0,
      genre: 'action', */
    };
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título:
          <input
            type="text"
            data-testid="title-input"
            onChange={ onClick }
            value={ title }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            data-testid="subtitle-input"
            onChange={ onClick }
            value={ subtitle }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            onChange={ onClick }
            value={ imagePath }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            data-testid="storyline-input"
            onChange={ onClick }
            value={ storyline }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
