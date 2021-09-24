import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryLine from './InputStoryLine';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { state } = this;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ state.title } handleChange={ this.handleChange } />
        <InputSubtitle value={ state.subtitle } handleChange={ this.handleChange } />
        <InputImage value={ state.imagePath } handleChange={ this.handleChange } />
        <InputStoryLine value={ state.storyLine } handleChange={ this.handleChange } />
        <InputRating value={ state.rating } handleChange={ this.handleChange } />
        <InputGenre value={ state.genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  storyLine: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}.isRequired;

export default AddMovie;
