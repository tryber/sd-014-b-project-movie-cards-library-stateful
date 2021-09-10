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
          id="title"
          value={ title }
          handleChange={ this.handleChange }
          description="Título"
          type="text"
        />
        <TextInputDefault
          name="subtitle"
          id="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
          description="Sub Título"
          type="text"
        />
        <TextInputDefault
          name="imagePath"
          id="imagePath"
          value={ imagePath }
          handleChange={ this.handleChange }
          description="Link da Imagem"
          type="text"
        />
        <TextInputDefault />
        <TextInputDefault />
      </form>
    );
  }
}

export default AddMovie;
