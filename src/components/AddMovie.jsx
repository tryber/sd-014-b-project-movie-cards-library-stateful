import React, { Component } from 'react';
import Title from './Title';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  } // Explicação no fim da página

  render() {
    const { subtitle, title, imagePath,
      storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title title={ title } onChange={ this.handleChange } />
          <label htmlFor data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="title-input"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor data-testid="image-input-label">
            Imagem
            <input
              type="image"
              alt="movie-poster"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor data-testid="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
              value={ storyline }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              data-testid="rating-input"
              value={ rating }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

// Em passos:
// 1 - Recebe o event e desestrutura para pegar só event.target, que agora é target.
// 2 - Do target pega target.name e target.value, desestruturando para name e value
// 3 - Em setState, desestrutura o item que tiver chave name, mudando o valor pra value
// É geral o suficiente para ser usado em diferentes lugares
