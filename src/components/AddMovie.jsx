import React from 'react';

import Input from './Input';
import TextArea from './TextArea';
import SelectGenreMovie from './SelectGenreMovie';
import ButtonSend from './ButtonSendMovie';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
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
        <Input
          titleLabel="Título"
          dataTestIdLabel="title-input-label"
          dataTestIdInput="title-input"
          name="title"
          value={ title }
          handleChange={ this.handleChange }
        />
        <Input
          titleLabel="Subtítulo"
          dataTestIdLabel="subtitle-input-label"
          dataTestIdInput="subtitle-input"
          name="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <Input
          titleLabel="Imagem"
          dataTestIdLabel="image-input-label"
          dataTestIdInput="image-input"
          name="imagePath"
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <TextArea
          titleLabel="Sinopse"
          dataTestIdLabel="storyline-input-label"
          dataTestIdTextarea="storyline-input"
          name="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <Input
          type="number"
          titleLabel="Avaliação"
          dataTestIdLabel="rating-input-label"
          dataTestIdInput="rating-input"
          name="rating"
          value={ rating }
          handleChange={ this.handleChange }
        />
        <SelectGenreMovie genre={ genre } handleChange={ this.handleChange } />
        <ButtonSend genre={ genre } handleClick={ this.handleClick } />
      </form>
    );
  }
}

export default AddMovie;
