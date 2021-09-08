import React from 'react';
import InputSubtitle from './Inputs/InputSubtitle';
import InputTitle from './Inputs/InputTitle';
import InputImage from './Inputs/InputImage';
import InputRating from './Inputs/InputRating';
// import PropTypes from 'prop-types';

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
    this.information = this.information.bind(this);
    this.getInformation = this.getInformation.bind(this);
  }

  information = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  getInformation = () => {

  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputSubtitle value={ subtitle } onChange={ this.information } />
        <InputTitle value={ title } onChange={ this.information } />
        <InputImage value={ imagePath } onChange={ this.information } />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            type="text"
            onChange={ this.information }
            value={ storyline }
          />
        </label>
        <InputRating value={ rating } onChange={ this.information } />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            onChange={ this.information }
            value={ genre }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ this.getInformation }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
