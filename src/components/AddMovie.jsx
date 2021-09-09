// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddInput from './AddInput';
import AddSinopse from './AddSinopse';
import AddGender from './AddGender';

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
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'rating') {
      return this.setState({ [e.target.name]: Number(e.target.value) });
    }
    return this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(callback) {
    callback(this.state);
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="submit" data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <AddInput
          dfID="title"
          dfText="Título"
          dfValue={ title }
          onChange={ this.handleChange }
        />
        <AddInput
          dfID="subtitle"
          dfText="Subtítulo"
          dfValue={ subtitle }
          onChange={ this.handleChange }
        />
        <AddInput
          dfID="image"
          dfName="imagePath"
          dfText="Imagem"
          dfValue={ imagePath }
          onChange={ this.handleChange }
        />
        <AddSinopse dfValue={ storyline } onChange={ this.handleChange } />
        <AddInput
          type="number"
          dfID="rating"
          dfText="Avaliação"
          dfValue={ rating }
          onChange={ this.handleChange }
        />
        <AddGender dfValue={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => this.handleClick(onClick) }
          id="submit"
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
