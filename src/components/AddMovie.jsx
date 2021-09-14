import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';
import Thumbnail from './Thumbnail';
import MovieRating from './MovieRating';
import Storyline from './StoryLine';
import Subtitle from './Subtitle';
import Title from './Title';

class AddMovie extends Component {
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
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleClick = () => {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title value={ title } onChange={ this.handleChange } />
          <Subtitle value={ subtitle } onChange={ this.handleChange } />
          <Thumbnail value={ imagePath } onChange={ this.handleChange } />
          <Storyline value={ storyline } onChange={ this.handleChange } />
          <MovieRating rating={ rating } onChange={ this.handleChange } />
          <Genre value={ genre } onChange={ this.handleChange } />
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.handleClick }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
