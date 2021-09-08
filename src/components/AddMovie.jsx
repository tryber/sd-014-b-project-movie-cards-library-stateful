import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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
  }

  atuaFil(event) {
    this.setState({ title: event.target.value });
  }

  atuaSub(event) {
    this.setState({ subtitle: event.target.value });
  }

  atuaImage(event) {
    this.setState({ imagePath: event.target.value });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="addMovie" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="addMovie"
            value={ title }
            onChange={ this.atuaFilm }
            data-testid="title-input"
          />
        </label>

        <label htmlFor="sub" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="sub"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.atuaSub }
          />
        </label>

        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="image"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.atuaImage }
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
