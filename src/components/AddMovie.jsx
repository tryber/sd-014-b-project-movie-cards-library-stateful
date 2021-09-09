import React from 'react';
import PropTypes from 'prop-types';
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + value,
    }));
  }

  handleClick(event, callback) {
    event.preventDefault();
    callback(this.state);
  }

  render() {
    const { onClick } = this.props;
    const { rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <FormItem name="title" onChange={ this.handleChange }>
          Título
        </FormItem>
        <FormItem Tag="textarea" name="subtitle" onChange={ this.handleChange }>
          Subtítulo
        </FormItem>
        <FormItem name="imagePath" onChange={ this.handleChange }>
          Imagem
        </FormItem>
        <FormItem name="storyline" onChange={ this.handleChange }>
          Sinopse
        </FormItem>
        <FormItem
          name="rating"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
        >
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
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => { this.handleClick(event, onClick); } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
