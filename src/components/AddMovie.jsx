// 6 - Crie um componente chamado <AddMovie />
// Atenção: criei novos componentes para evitar erro no Lint (tamanho do código)
// Ajuda do Guilherme Andrade (programador) no reset do estado e no ternário

import React from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';
import StoryLine from './StoryLine';
import Image from './Image';
import Subtitles from './Subtitles';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleInitialValue = this.handleInitialValue.bind(this);
    this.resetButton = this.resetButton.bind(this);
  }

  handleInitialValue(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  resetButton() {
    const { onClick } = this.props;
    onClick(this.state);
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
    const { subtitle, title, imagePath, rating, storyline, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleInitialValue }
            />
          </label>
          <Subtitles handleInitialValue={ this.handleInitialValue } value={ subtitle } />
          <Image handleInitialValue={ this.handleInitialValue } value={ imagePath } />

          <StoryLine handleInitialValue={ this.handleInitialValue } value={ storyline } />
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleInitialValue }
            />
          </label>
          <Genre handleInitialValue={ this.handleInitialValue } value={ genre } />
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.resetButton }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
