import React from 'react';
import InputText from './InputText';
import SelectForm from './SelectForm';

class AddMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addMovie = (e) => {
    e.preventDefault();
    console.log('oi!!!');
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            name="storyline"
            id="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação:
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            id="rating"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <SelectForm
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.addMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovies;
