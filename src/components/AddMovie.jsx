import React from 'react';
import RatingForm from './RatingForm';
import Title from './Title';
import Subtitle from './Subtitle';
import Storyline from './Storyline';
import Genre from './Genre';

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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" action="">
        <Title title={ title } onChange={ this.handleInputChange } />
        <Subtitle subtitle={ subtitle } onChange={ this.handleInputChange } />
        <Storyline storyline={ storyline } onChange={ this.handleInputChange } />

        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            alt=""
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleInputChange }
            data-testid="image-input"
          />
        </label>

        <RatingForm rating={ rating } onChange={ this.handleInputChange } />
        <Genre genre={ genre } onChange={ this.handleInputChange } />
      </form>
    );
  }
}

export default AddMovie;
