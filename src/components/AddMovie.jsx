import React from 'react';
import PropTypes from 'prop-types';
import AddGenre from './AddGenre';
import AddTitle from './AddTitle';
import AddImage from './AddImage';
import AddMovieButton from './AddMovieButton';
import AddRating from './AddRating';
import AddStoryLine from './AddStoryLine';
import AddSubtitle from './AddSubtitle';

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
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick = (onClick) => {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <AddTitle value={ title } onChange={ this.handleChange } />
        <AddSubtitle value={ subtitle } onChange={ this.handleChange } />
        <AddImage value={ imagePath } onChange={ this.handleChange } />
        <AddStoryLine value={ storyline } onChange={ this.handleChange } />
        <AddRating value={ Number(rating) } onChange={ this.handleChange } />
        <AddGenre value={ genre } onChange={ this.handleChange } />
        <AddMovieButton onChange={ () => this.handleClick(onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
