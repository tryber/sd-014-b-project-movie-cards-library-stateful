import React from 'react';
import PropTypes from 'prop-types';
import TitleForm from './TitleForm';
import SubTitleForm from './SubTitleForm';
import ImageForm from './ImageForm';
import TextAreaForm from './TextAreaForm';
import RatingNumber from './RatingNumber';
import GenreForm from './GenreForm';

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
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleForm onChange={ this.handleChange } value={ title } />
        <SubTitleForm onChange={ this.handleChange } value={ subtitle } />
        <ImageForm onChange={ this.handleChange } value={ imagePath } />
        <TextAreaForm onChange={ this.handleChange } value={ storyline } />
        <RatingNumber onChange={ this.handleChange } value={ rating } />
        <GenreForm onChange={ this.handleChange } value={ genre } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
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
