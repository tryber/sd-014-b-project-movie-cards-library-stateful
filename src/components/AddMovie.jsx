// implement AddMovie component here
import React from 'react';
import InputTitle from './elements/InputTitle';
import InputSubtitle from './elements/InputSubtitle';
import InputImagePath from './elements/InputImagePath';
import TextareaStoryline from './elements/TextareaStoryline';
import InputRating from './elements/InputRating';
import SelectGenre from './elements/SelectGenre';

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

    this.handleChange = this.handleChange.bind(this);
  }

  // Recebi ajuda da colega de turma Bel Albuquerque, para desenvolver o setState da função handleChange.
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  confirmButton() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
        <InputImagePath value={ imagePath } onChange={ this.handleChange } />
        <TextareaStoryline value={ storyline } onChange={ this.handleChange } />
        <InputRating value={ rating } onChange={ this.handleChange } />
        <SelectGenre value={ genre } onChange={ this.handleChange } />
        <button type="button" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
