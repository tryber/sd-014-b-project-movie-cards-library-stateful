import React from 'react';
import Inputs from './Inputs';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      genre: 'action',
      rating: 0,
    };
  }

  onSearchTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Inputs
          state={ { title, subtitle, imagePath } }
          handleChange={ this.onSearchTextChange }
        />
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.onSearchTextChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            name="rating"
            data-testid="rating-input"
            type="number"
            onChange={ this.onSearchTextChange }
            value={ rating }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            onChange={ this.onSearchTextChange }
            data-testid="genre-input"
            name="genre"
            value={ genre }
            htmlFor="genre-option"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
