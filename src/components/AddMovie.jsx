import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';
import ButtonAddMovie from './ButtonAddMovie';

class AddMovie extends Component {
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = (onClick) => {
    onClick(this.state);
    console.log('clicou');
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
    // Estado do componente
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <div>
          <InputTitle title={ title } onChange={ this.handleChange } />
          <InputSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
          <InputImage imagePath={ imagePath } onChange={ this.handleChange } />
          <InputStoryline storyline={ storyline } onChange={ this.handleChange } />
          <InputRating rating={ rating } onChange={ this.handleChange } />
          <InputGenre genre={ genre } onChange={ this.handleChange } />
        </div>
        <div>
          <ButtonAddMovie onChange={ () => this.handleClick(onClick) } />
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
