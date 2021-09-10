// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';
import AddImage from './AddImage';
import AddStoryline from './AddStoryline';
import AddRating from './AddRating';
import AddGenre from './AddGenre';
import AddButton from './AddButton';

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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddTitle value={ title } onChange={ this.handleChange } />
        <AddSubtitle value={ subtitle } onChange={ this.handleChange } />
        <AddImage value={ imagePath } onChange={ this.handleChange } />
        <AddStoryline value={ storyline } onChange={ this.handleChange } />
        <AddRating value={ Number(rating) } onChange={ this.handleChange } />
        <AddGenre value={ genre } onChange={ this.handleChange } />
        <AddButton onClick={ (event) => onClick(event, this.state) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
