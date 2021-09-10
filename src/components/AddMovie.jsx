import React, { Component } from 'react';
import TextInputDefault from './TextInputDefault';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) { // fonte: Course (12.2)
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.props;
    return (
      <form>
        <TextInputDefault
          name="title"
          inputId="title-input"
          labelId="title-input-label"
          value={ title }
          handleChange={ this.handleChange }
          description="Título"
          type="text"
        />
        <TextInputDefault
          name="subtitle"
          inputId="subtitle-input"
          labelId="subtitle-input-label"
          value={ subtitle }
          handleChange={ this.handleChange }
          description="Subtítulo"
          type="text"
        />
        <TextInputDefault
          name="imagePath"
          inputId="image-input"
          labelId="image-input-label"
          value={ imagePath }
          handleChange={ this.handleChange }
          description="Imagem"
          type="text"
        />
        <TextInputDefault />
        <TextInputDefault />
      </form>
    );
  }
}

export default AddMovie;
