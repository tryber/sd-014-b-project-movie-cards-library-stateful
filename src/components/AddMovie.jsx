import React from 'react';
import PropTypes from 'prop-types';
import FormItem from './FormItem';
import SelectItem from './SelectItem';

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
    this.setState({
      [name]: value,
    });
  }

  handleClick(event, callback) {
    event.preventDefault();
    callback(this.state);
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
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <FormItem name="title" onChange={ this.handleChange } value={ title }>
          Título
        </FormItem>
        <FormItem
          Tag="textarea"
          name="subtitle"
          onChange={ this.handleChange }
          value={ subtitle }
        >
          Subtítulo
        </FormItem>
        <FormItem name="image" onChange={ this.handleChange } value={ imagePath }>
          Imagem
        </FormItem>
        <FormItem name="storyline" onChange={ this.handleChange } value={ storyline }>
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
        <SelectItem
          name="genre"
          onChange={ this.handleChange }
          value={ genre }
          options={ { action: 'Ação', comedy: 'Comédia', thriller: 'Suspense' } }
        >
          Gênero
        </SelectItem>
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
