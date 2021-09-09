import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieForm/Title';
import Subtitle from './AddMovieForm/Subtitle';
import ImagePath from './AddMovieForm/ImagePath';
import Storyline from './AddMovieForm/Storyline';
import Rating from './AddMovieForm/Rating';
import Select from './AddMovieForm/Select';
import Button from './AddMovieForm/Button';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Consultei o repositório do Michael Caxias para resolver essa parte.
  // Link: https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/64/commits/9974cbc925b7fce5a42cf1d50b46a31e81ec22a8
  resetState() {
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
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <ImagePath value={ imagePath } handleChange={ this.handleChange } />
        <Storyline value={ storyline } handleChange={ this.handleChange } />
        <Rating value={ rating } handleChange={ this.handleChange } />
        <Select value={ genre } handleChange={ this.handleChange } />
        <Button resetState={ this.resetState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
