import React from 'react';
import FormItem from './FormItem';

class AddMovie extends React.Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <FormItem name="title" value={ title } onChange={ this.handleChange }>
          Título
        </FormItem>
        <FormItem name="subtitle" value={ subtitle } onChange={ this.handleChange }>
          Subtítulo
        </FormItem>
        <FormItem name="imagePath" value={ imagePath } onChange={ this.handleChange }>
          Imagem
        </FormItem>
        <FormItem name="storyline" value={ storyline } onChange={ this.handleChange }>
          Sinopse
        </FormItem>
        <FormItem name="rating" value={ rating } onChange={ this.handleChange }>
          Avaliação
        </FormItem>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ onClick(this.state) }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
