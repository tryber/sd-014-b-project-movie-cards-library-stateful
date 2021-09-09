import React from 'react';
import InputImage from '../AddMoviesInputs/InputImage';
import InputSinopse from '../AddMoviesInputs/InputSinopse';
import InputSubtitle from '../AddMoviesInputs/InputSubtitle';
import InputTitle from '../AddMoviesInputs/InputTitle';

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
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } />
        <InputSubtitle value={ subtitle } />
        <InputImage value={ imagePath } />
        <InputSinopse value={ storyline } />
        <label
          htmlFor="rating-label"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            id="rating-label"
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ rating }
          />
        </label>
        <label
          htmlFor="genre-label"
          data-testid="genre-input-label"
        >
          <select
            id="genre-label"
            data-testid="genre-input"
            value={ genre }
            onChange={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="submit">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
