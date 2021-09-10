// implement AddMovie component here
import React, { Component } from 'react'
import Title from '../inputMovie/Title';
import Subtitle from '../inputMovie/Subtitle';
import Storyline from '../inputMovie/Storyline';
import Image from '../inputMovie/Image';
import Rating from './Rating';
import Genre from '../inputMovie/Genre';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state ={
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
    
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.state({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" action="">
        <Title value={ title } onChange={ this.handleChange }/>
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
        <button data-testid="send-button">Adicionar filme</button>
      </form>
    )
  }
}
