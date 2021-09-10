import React from 'react';
import PropTypes from 'prop-types';
import InputSubtitle from './Inputs/InputSubtitle';
import InputTitle from './Inputs/InputTitle';
import InputImage from './Inputs/InputImage';
import InputRating from './Inputs/InputRating';
import TextAreaStoryline from './Inputs/TextAreaStoryline';
import SelectGenre from './Inputs/SelectGenre';
import ButtonMovie from './Inputs/ButtonMovie';

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
    this.information = this.information.bind(this);
    this.getInformation = this.getInformation.bind(this);
  }

  getInformation = () => {
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

  information = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputSubtitle value={ subtitle } onChange={ this.information } />
        <InputTitle value={ title } onChange={ this.information } />
        <InputImage value={ imagePath } onChange={ this.information } />
        <TextAreaStoryline value={ storyline } onChange={ this.information } />
        <InputRating value={ rating } onChange={ this.information } />
        <SelectGenre value={ genre } onChange={ this.information } />
        <ButtonMovie onClick={ this.getInformation } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
