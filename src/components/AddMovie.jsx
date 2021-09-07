import React, { Component } from 'react';
import InputAddMovie from './inputAddMovie';
import inputGenreRating from './inputGenreRating';

class AddMovie extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange= ({ target }) => {
    const { name, value } = target;
    this.setState = {
      [name]: value,
    };
  }

  resetForm= () => window.location.reload()

  render() {
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputAddMovie
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            imagePath={ imagePath }
            onChange={ this.onChange }
          />
          <inputGenreRating
            rating={ rating }
            genre={ genre }
            onChange={ this.onChange }
          />
          <button type="submit" data-testid="send-button" onClick={ this.resetForm }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
