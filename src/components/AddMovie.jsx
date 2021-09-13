import React from 'react';
import PropTypes from 'prop-types';

import InputTitle from './InputTitle';
import InputSubTitle from './InputSubTitle';
import ImagePath from './ImagePath';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

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

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } funcCallback={ this.handleChange } />
        <InputSubTitle value={ subtitle } funcCallback={ this.handleChange } />
        <ImagePath value={ imagePath } funcCallback={ this.handleChange } />
        <InputStoryline value={ storyline } funcCallback={ this.handleChange } />
        <InputRating value={ rating } funcCallback={ this.handleChange } />
        <InputGenre value={ genre } funcCallback={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ () => onClick(this.state) }
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

export default AddMovie;
