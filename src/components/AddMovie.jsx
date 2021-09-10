import React from 'react';
import PropTypes from 'prop-types';
import TextForm from './TextForm/TextForm';
import NumberForm from './NumberForm/NumberForm';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleState = this.handleState.bind(this);
    this.handleAddMovieButton = this.handleAddMovieButton.bind(this);
  }

  handleState({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  /*
  * Consultei o repositório de Thyara Nonato para resolver a função handleAddMovieButton
  * https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/blob/thyara-movie-cards-library-stateful/src/components/AddMovie.jsx
  */
  handleAddMovieButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TextForm id="title" value={ title } onChange={ this.handleState }>
          Título
        </TextForm>
        <TextForm id="subtitle" value={ subtitle } onChange={ this.handleState }>
          Subtítulo
        </TextForm>
        <TextForm id="imagePath" value={ imagePath } onChange={ this.handleState }>
          Imagem
        </TextForm>
        <TextForm id="storyline" value={ storyline } onChange={ this.handleState }>
          Sinopse
        </TextForm>
        <NumberForm id="rating" value={ rating } onChange={ this.handleState }>
          Avaliação
        </NumberForm>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            onChange={ this.handleState }
            value={ genre }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleAddMovieButton }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
