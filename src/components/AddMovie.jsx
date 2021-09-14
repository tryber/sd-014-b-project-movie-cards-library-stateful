import React from 'react';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

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
  }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
      return (
        <form data-testid="add-movie-form">
          <InputTitle
            value={ title }
            handleChange={ this.handleChange }
          />

          <InputSubtitle
            value={ subtitle }
            handleChange={ this.handleChange }
          />

          <InputImage
            value={ imagePath }
            handleChange={ this.handleChange }
          />

          <InputStoryline
            value={ storyline }
            handleChange={ this.handleChange }
          />

          <InputRating
            value={ rating }
            handleChange={ this.handleChange }
          />

          <InputGenre
            value={ genre }
            handleChange={ this.handleChange }
          />

        </form>
      );
    }
}

export default AddMovie;
