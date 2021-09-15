// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageP from './ImageP';
import SelectGenre from './SelectGenre';
import InputRating from './InputRating';
import Sinopse from './Sinopse';
import Subtitle from './Subtitle';
import Title from './Title';
import ButtonMovie from './ButtonMovie';

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
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick = (onClick) => {
    (onClick)(this.state);

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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <section>
          <Subtitle value={ subtitle } onChange={ this.handleChange } />
          <Title value={ title } onChange={ this.handleChange } />
          <ImageP value={ String(imagePath) } onChange={ this.handleChange } />
          <Sinopse value={ storyline } onChange={ this.handleChange } />
          <InputRating value={ Number(rating) } onChange={ this.handleChange } />
          <SelectGenre value={ genre } onChange={ this.handleChange } />
        </section>
        <section>
          <ButtonMovie onChange={ () => this.handleClick(onClick) } />
        </section>
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

// Consultei o repositório de Beatriz Ribeiro para criar o botão.
// https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/86/files
