import React from 'react';
import PropTypes from 'prop-types';
import Title from './inputs/Title';
import Subtitle from './inputs/Subtitle';
import ImagePath from './inputs/ImagePath';
import Storyline from './inputs/StoryLine';
import RatingInput from './inputs/RatingInput';
import Genre from './inputs/Genre';

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
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          onChange={
            ({ target: { value } }) => { this.setState({ title: value }); }
          }
        />
        <Subtitle
          subtitle={ subtitle }
          onChange={
            ({ target: { value } }) => { this.setState({ subtitle: value }); }
          }
        />
        <ImagePath
          imagePath={ imagePath }
          onChange={
            ({ target: { value } }) => { this.setState({ imagePath: value }); }
          }
        />
        <Storyline
          storyline={ storyline }
          onChange={
            ({ target: { value } }) => { this.setState({ storyline: value }); }
          }
        />
        <RatingInput
          rating={ rating }
          onChange={
            ({ target: { value } }) => { this.setState({ rating: Number(value) }); }
          }
        />
        <Genre
          genre={ genre }
          onChange={ ({ target: { value } }) => { this.setState({ genre: value }); } }
        />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.handleClick }
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
