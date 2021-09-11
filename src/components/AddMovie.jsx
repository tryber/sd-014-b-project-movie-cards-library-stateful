import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './elements/InputTitle';
import InputSubtitle from './elements/InputSubtitle';
import InputImagePath from './elements/InputImagePath';
import TextareaStoryline from './elements/TextareaStoryline';
import InputRating from './elements/InputRating';
import SelectGenre from './elements/SelectGenre';
import Button from './elements/Button';

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
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick = (onClick) => {
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
      <form data-testid="add-movie-form">
        <InputTitle state={ title } handleChange={ this.handleChange } />
        <InputSubtitle state={ subtitle } handleChange={ this.handleChange } />
        <InputImagePath state={ imagePath } handleChange={ this.handleChange } />
        <TextareaStoryline state={ storyline } handleChange={ this.handleChange } />
        <InputRating state={ Number(rating) } handleChange={ this.handleChange } />
        <SelectGenre state={ genre } handleChange={ this.handleChange } />
        <Button onClick={ () => this.handleClick(onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
