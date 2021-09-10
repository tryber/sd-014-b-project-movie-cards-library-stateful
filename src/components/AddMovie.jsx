/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';

class AddMovie extends Component {
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
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          type="text"
          text="Título"
          labelId="title-input-label"
          initialState={ title }
          inputId="title-input"
          onChange={ (event) => {
            this.setState({ title: event.target.value });
          } }
        />
        <Input
          type="text"
          text="Subtítulo"
          labelId="subtitle-input-label"
          initialState={ subtitle }
          inputId="subtitle-input"
          onChange={ (event) => {
            this.setState({ subtitle: event.target.value });
          } }
        />
        <Input
          type="text"
          text="Imagem"
          labelId="image-input-label"
          initialState={ imagePath }
          inputId="image-input"
          onChange={ (event) => {
            this.setState({ imagePath: event.target.value });
          } }
        />
        <TextArea
          text="Sinopse"
          labelId="storyline-input-label"
          initialState={ storyline }
          inputId="storyline-input"
          onChange={ (event) => {
            this.setState({ storyline: event.target.value });
          } }
        />
        <Input
          type="number"
          text="Avaliação"
          labelId="rating-input-label"
          initialState={ rating }
          inputId="rating-input"
          onChange={ (event) => {
            this.setState({ rating: event.target.value });
          } }
        />
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            onChange={ (event) => {
              this.setState({ genre: event.target.value });
            } }
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => {
            onClick(this.state);
            this.setState({
              subtitle: '',
              title: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
            });
          } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
