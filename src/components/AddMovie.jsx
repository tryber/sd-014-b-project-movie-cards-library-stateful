// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageP from './ImageP';
import InputRating from './InputRating';
import SelectGenre from './SelectGenre';
import Sinopse from './Sinopse';
import Subtitle from './Subtitle';
import Title from './Title';

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
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    const { onClick } = this.props;
    return (
      <section>
        <form data-testid="add-movie-form">
          <Subtitle value={ subtitle } onChange={ this.handleChange } />
          <Title value={ title } onChange={ this.handleChange } />
          <ImageP value={ imagePath } onChange={ this.handleChange } />
          <Sinopse value={ storyline } onChange={ this.handleChange } />
          <InputRating value={ Number(rating) } onChange={ this.handleChange } />
          <SelectGenre value={ genre } onChange={ this.handleChange } />
        </form>
      </section>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
