import React, { Component } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';

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
          <Subtitle subtitle={ subtitle } onChange={ this.handleChange } />
          <Image imagePath={ imagePath } onChange={ this.handleChange } />
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
          <label htmlFor data-testid="genre-input-label">
            Gênero
            <select
              value={ genre }
              onChange={ this.handleChange }
              data-testid="genre-input"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
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
