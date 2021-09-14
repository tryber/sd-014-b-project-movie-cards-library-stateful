import React from 'react';
import Title from './ComponenetesAddMovie/Title';
import SubTitle from './ComponenetesAddMovie/Subtitulo';
import Image from './ComponenetesAddMovie/Image';
import Sinopse from './ComponenetesAddMovie/Sinopse';
import Genre from './ComponenetesAddMovie/Genre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.add = this.add.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  add({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title value={ title } func={ this.add } />
        <SubTitle value={ subtitle } func={ this.add } />
        <Image value={ imagePath } func={ this.add } />
        <Sinopse value={ storyLine } func={ this.add } />
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.add }
          />
        </label>
        <Genre value={ genre } func={ this.add } />
      </form>
    );
  }
}

export default AddMovie;
