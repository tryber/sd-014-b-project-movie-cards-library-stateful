// implement AddMovie component here
import React, { Component } from 'react';
import Title from '../inputMovie/Title';
import Subtitle from '../inputMovie/Subtitle';
import Storyline from '../inputMovie/Storyline';
import Image from '../inputMovie/Image';
import Rating from '../inputMovie/Rating';
import Genre from '../inputMovie/Genre';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" action="">
        <Title title={ title } onChange={ this.onChange } />
        <Subtitle subtitle={ subtitle } onChange={ this.onChange } />
        <Image imagePath={ imagePath } onChange={ this.onChange } />
        <Storyline storyline={ storyline } onChange={ this.onChange } />
        <Rating rating={ rating } onChange={ this.onChange } />
        <Genre genre={ genre } onChange={ this.onChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
