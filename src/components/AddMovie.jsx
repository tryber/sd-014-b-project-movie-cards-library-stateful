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

    this.onRatingChange = this.onRatingChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onRatingChange(event) {
    const changed = event.target.value;
    this.setState({
      rating: changed,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } />
        <InputSubtitle value={ subtitle } />
        <InputImage value={ imagePath } />
        <InputSinopse value={ storyline } />
        <InputRating rating={ rating } onRatingChange={ this.onRatingChange } />
        <InputGenre value={ genre } onChange={ this.onRatingChange } />
        <button data-testid="send-button" type="submit">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
