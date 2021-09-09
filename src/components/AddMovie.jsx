import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
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
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput title={ title } handleChange={ this.handleChange } />
          <SubtitleInput subtitle={ subtitle } handleChange={ this.handleChange } />
          <ImageInput imagePath={ imagePath } handleChange={ this.handleChange } />
          <StorylineInput storyline={ storyline } handleChange={ this.handleChange } />
          <RatingInput rating={ rating } handleChange={ this.handleChange } />
          <GenreInput genre={ genre } handleChange={ this.handleChange } />
          <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
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
