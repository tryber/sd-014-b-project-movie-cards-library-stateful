import React from 'react';
import PropTypes from 'prop-types';
import AddMovieButton from './AddMovieComponents/Button';
import AddMovieGenre from './AddMovieComponents/Genre';
import AddMovieImage from './AddMovieComponents/Image';
import AddMovieRating from './AddMovieComponents/Rating';
import AddMovieStoryline from './AddMovieComponents/Storyline';
import AddMovieSubtitle from './AddMovieComponents/Subtitle';
import AddMovieTitle from './AddMovieComponents/Title';

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

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'rating') {
      this.setState({
        rating: Number(value),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle handleChange={ this.handleChange } value={ title } />
        <AddMovieSubtitle handleChange={ this.handleChange } value={ subtitle } />
        <AddMovieImage handleChange={ this.handleChange } value={ imagePath } />
        <AddMovieStoryline handleChange={ this.handleChange } value={ storyline } />
        <AddMovieRating handleChange={ this.handleChange } value={ rating } />
        <AddMovieGenre handleChange={ this.handleChange } value={ genre } />
        <AddMovieButton onClick={ (event) => onClick(event, this.state) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
