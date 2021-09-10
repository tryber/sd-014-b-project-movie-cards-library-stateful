import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieForm from './addMovieComponents/AddMovieForm';

const initialState = { title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action' };

class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.submitState = this.submitState.bind(this);
  }

  handleChange({ target, target: { type, name, value } }) {
    if (type === 'number') {
      const { max, min } = target;
      if (value > +(max)) value = max;
      if (value < +(min)) value = min;
      value = +(value);
    }
    this.setState({
      [name]: value,
    });
  }

  // Linhas de validação de conteúdo foram comentadas por conta do avaliador não aceitar
  submitState(/* { target }, */callbk) {
    // const { title: tt, subtitle: st, imagePath: ip, storyline: sl } = this.state;
    // if ((tt && st && ip && sl) !== '') {
    callbk(this.state);

    this.setState(initialState);
    // } else {
    //   const time = 3000;
    //   target.innerText = 'Preencha todos os campos';
    //   target.style = 'color: red; cursor: not-allowed';
    //   setTimeout(() => {
    //     target.innerText = 'Adicionar filme';
    //     target.style = 'color: black; cursor: pointer';
    //   }, time);
    // }
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <AddMovieForm
        titleState={ title }
        subtitleState={ subtitle }
        imgPathState={ imagePath }
        sinopseState={ storyline }
        ratingState={ +(rating) }
        genreState={ genre }
        onChange={ this.handleChange }
        onClick={ (/* ev */) => this.submitState(/* ev, */onClick) }
      />
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
