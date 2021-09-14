import React from 'react';
import PropTypes from 'prop-types';
import Sinopse from './Sinopse';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';
import InputRating from './InputRating';
import Select from './Select';

class AddMovie extends React.Component {
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

  addMovieAndReset() {
    const { onClick } = this.props;
    onClick(this.state);

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
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.addMovieAndReset }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
