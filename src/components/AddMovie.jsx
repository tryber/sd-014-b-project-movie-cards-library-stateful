// implement AddMovie component here
import React, { Component } from 'react'

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state ={
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" action="">
        <label htmlFor="" data-testid="title-input-label">
          Título
          <input value={ title } type="text" name="" id="" data-testid="title-input" />
        </label>
        <label htmlFor="" data-testid="subtitle-input-label">
          Subtítulo
          <input value={ subtitle } type="text" name="" id="" data-testid="subtitle-input" />
        </label>
        <label htmlFor="" data-testid="image-input-label">
          Imagem
          <input value={ imagePath } type="text" name="" id="" data-testid="image-input" />
        </label>
        <label htmlFor="" data-testid="storyline-input-label">
          Sinopse
          <textarea value={ storyline } name="" id="" cols="30" rows="10" data-testid="storyline-input"></textarea>
        </label>
        <label htmlFor="" data-testid="rating-input-label">
          Avaliação
          <input value={ rating } type="number" name="" id="" />
        </label>
      </form>
    )
  }
}
