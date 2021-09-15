import React from 'react';
import PropTypes from 'prop-types';
import Storyline from './Storyline';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';
import InputRating from './InputRating';
import Select from './Select';
import Button from './Button';

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

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  addMovieAndReset = (onClick) => {
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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <Title value={ title } onChange={ this.handleChange } />
          <Subtitle value={ subtitle } onChange={ this.handleChange } />
          <Image value={ String(imagePath) } onChange={ this.handleChange } />
          <Storyline value={ storyline } onChange={ this.handleChange } />
          <InputRating value={ Number(rating) } onChange={ this.handleChange } />
          <Select value={ genre } onChange={ this.handleChange } />
        </form>
        <Button onChange={ () => this.addMovieAndReset(onClick) } />
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

// Só consegui organizar o projeto com ajuda da Mayara Andronico
