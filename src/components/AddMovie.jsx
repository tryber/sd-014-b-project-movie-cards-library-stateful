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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovieAndReset = (onClick) => {
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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <Title name="title" value={ title } onChange={ this.handleChange } />
          <Subtitle name="subtitle" value={ subtitle } onChange={ this.handleChange } />
          <Image name="imagePath" value={ imagePath } onChange={ this.handleChange } />
          <Sinopse name="storyline" value={ storyline } onChange={ this.handleChange } />
          <InputRating value={ rating } onChange={ this.handleChange } />
          <Select name="genre" value={ genre } onChange={ this.handleChange } />
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
