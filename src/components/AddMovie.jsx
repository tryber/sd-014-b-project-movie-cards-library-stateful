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
      rating: 0,
      genre: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  mySubmitHandler = () => {
    console.log('formulário enviado');
  }

  myFunction = () => {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    console.log(title, subtitle, imagePath, storyline, rating, genre);
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form onSubmit={ this.mySubmitHandler } data-testid="add-movie-form">
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
          onClick={ this.myFunction }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovies;
