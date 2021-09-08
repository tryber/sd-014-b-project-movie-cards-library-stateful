import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick() {
    const { onClick } = this.props;

    onClick(this.state); // executa a função passada como props

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">

        <Title title={ title } handleChange={ this.handleChange } />

        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />

        <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />

        <label htmlFor="input-storyline-addMovie" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            id="input-storyline-addMovie"
            cols="30"
            rows="10"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="input-rating-addMovie" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            data-testid="rating-input"
            value={ rating }
            id="input-rating-addMovie"
            type="number"
            onChange={ this.handleChange }
          />
        </label>

        <Genre genre={ genre } handleChange={ this.handleChange } />

        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
