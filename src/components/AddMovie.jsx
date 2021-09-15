import React from 'react';
import PropTypes from 'prop-types';
import Sinopse from './Sinopse';
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
    this.addMovieAndReset = this.addMovieAndReset.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      subtitle: event.target.value,
      title: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    });
  }

  // addMovieAndReset() {
  //   const { onClick } = this.props;
  //   onClick();
  addMovieAndReset = (onClick) => {
    onClick();
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
          <Image value={ imagePath } onChange={ this.handleChange } />
          <Sinopse value={ storyline } onChange={ this.handleChange } />
          <InputRating value={ rating } onChange={ this.handleChange } />
          <Select value={ genre } onChange={ this.handleChange } />
          <Button onClick={ () => this.addMovieAndReset(onClick) } />
        </form>
        {/* <button
          type="button"
          data-testid="send-button"
          onClick={ this.addMovieAndReset }
        >
          Adicionar filme
        </button> */}
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
