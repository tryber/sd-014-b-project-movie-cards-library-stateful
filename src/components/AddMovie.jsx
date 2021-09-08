// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, imagePath, title, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input data-testid="title-input" id="title" type="text" />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input data-testid="subtitle-input" id="subtitle" type="text" />
        </label>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          <input data-testid="image-input" id="image" type="text" />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea data-testid="storyline-input" id="storyline" type="text" />
        </label>
        <label data-testid="rating-input-label" htmlFor="number">
          Avaliação
          <input
            data-testid="rating-input"
            id="number"
            type="number"
            value={ rating }
            onChange={ (e) => { this.setState({ rating: e.target.value }); } }
          />
        </label>
        <label htmlFor="selectGenre" data-testid="genre-input-label">
          Gênero
          <select
            id="selectGenre"
            value={ genre }
            data-testid="genre-input"
            onChange={ (e) => { this.setState({ genre: e.target.value }); } }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button"> Adicionar filme </button>
      </form>
    );
  }
}

// AddMovie.propTypes = {

// }

export default AddMovie;
