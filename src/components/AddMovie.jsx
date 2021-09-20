import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputStoryline from './InputStoryline';
import InputImage from './InputImage';
import InputRating from './InputRating';

// 6 - Crie um componente chamado <AddMovie />

class AddMovie extends React.Component {
  constructor() {
    super();
    // Set initial state dos inputs
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // Set changes inputs state
  handleChange = ({ target }) => {
    // Destructuring name do obj target do event
    const { name } = target;
    // Destructuring value do obj target do event
    const { value } = target;
    // Set state do input alterado
    this.setState({
      [name]: value,
    });
  };

  // Add new movie -> button
  handleClick = () => {
    // Destructuring onClick das props
    const { onClick } = this.props;
    // Chamar evento onClick ao se clicar no botão
    onClick(this.state);
    // Reset state inputs
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
    // Destructuring dos itens de inputs no obj do state
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <section>
          <InputTitle value={ title } onChange={ this.handleChange } />
          <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
          <InputImage value={ imagePath } onChange={ this.handleChange } />
          <InputStoryline value={ storyline } onChange={ this.handleChange } />
          <InputRating value={ rating } onChange={ this.handleChange } />
          <label htmlFor="genreNewMovie" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              id="genre-input"
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChange }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <section>
            <button
              data-testid="send-button"
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar filme
            </button>
          </section>
        </section>
      </form>
    );
  }
}

/*
<AddMovie /> deve receber como prop:
onClick, uma callback
*/

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
