import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import NumberInput from './NumberInput';
import GenreInput from './GenreInput';
import StorylineTextArea from './StorylineTextArea';

class AddMovie extends Component {
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

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput
          initialState={ title }
          onChange={ (event) => this.setState({ title: event.target.value }) }
        />
        <SubtitleInput
          initialState={ subtitle }
          onChange={ (event) => this.setState({ subtitle: event.target.value }) }
        />
        <ImageInput
          initialState={ imagePath }
          onChange={ (event) => this.setState({ imagePath: event.target.value }) }
        />
        <StorylineTextArea
          initialState={ storyline }
          onChange={ (event) => this.setState({ storyline: event.target.value }) }
        />
        <NumberInput
          initialState={ rating }
          onChange={ (event) => this.setState({ rating: event.target.value }) }
        />
        <GenreInput
          initialState={ genre }
          onChange={ (event) => this.setState({ genre: event.target.value }) }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => {
            onClick(event, this.state);
            this.setState({
              subtitle: '',
              title: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
            });
          } }
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
