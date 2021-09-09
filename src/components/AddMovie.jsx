import React from 'react';

import Input from './Input';
import TextArea from './TextArea';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
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
      </form>
    );
  }
}

export default AddMovie;
