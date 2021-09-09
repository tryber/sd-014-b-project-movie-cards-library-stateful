import React from 'react';
import PropTypes from 'prop-types';
import InputImage from './InputImage';
import InputTitle from './InputTitle';
import InputSubTitle from './InputSubTitle';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';
import Button from './Button';

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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } handleChange={ this.handleChange } />
        <InputSubTitle value={ subtitle } handleChange={ this.handleChange } />
        <InputImage value={ imagePath } handleChange={ this.handleChange } />
        <InputStoryline value={ storyLine } handleChange={ this.handleChange } />
        <InputRating value={ rating } handleChange={ this.handleChange } />
        <InputGenre value={ genre } handleChange={ this.handleChange } />
        <Button onClick={ onClick } />
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
