import React from 'react';
import PropTypes from 'prop-types';
import TextImputBlock from './TextImputBlock';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name: targetName } = target;
    const targetValue = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [targetName]: targetValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { props: { onClick }, state } = this;

    onClick(state);

    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { state: { title, subtitle, imagePath, storyline, rating, genre },
      handleChange, handleSubmit } = this;

    return (
      <form data-testid="add-movie-form">
        <TextImputBlock
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          handleChange={ handleChange }
        />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ rating }
            id="rating"
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre"
            value={ genre }
            onChange={ handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
