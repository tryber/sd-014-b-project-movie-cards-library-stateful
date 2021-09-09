import React from 'react';
import InputGenre from '../AddMoviesInputs/InputGenre';
import InputImage from '../AddMoviesInputs/InputImage';
import InputRating from '../AddMoviesInputs/InputRating';
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
        <InputRating value={ rating } />
        <InputGenre value={ genre } />
        <button data-testid="send-button" type="submit">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
