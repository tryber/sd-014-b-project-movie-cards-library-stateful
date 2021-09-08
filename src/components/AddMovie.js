import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenreTag from './GenreTag';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import Subtitle from './Subtitle';
import Title from './Title';
import RatingTag from './RatingTag';

export default class AddMovie extends Component {
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

  setStateMethod = () => {
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
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          onChange={
            ({ target: { value } }) => { this.setState({ title: value }); }
          }
        />
        <Subtitle
          title={ subtitle }
          onChange={
            ({ target: { value } }) => { this.setState({ title: value }); }
          }
        />
        <ImagePath
          imagePath={ imagePath }
          onChange={
            ({ target: { value } }) => { this.setState({ title: value }); }
          }
        />
        <Storyline
          storyline={ storyline }
          onChange={
            ({ target: { value } }) => { this.setState({ title: value }); }
          }
        />
        <RatingTag
          rating={ rating }
          onChange={
            ({ target: { value } }) => { this.setState({ title: value }); }
          }
        />
        <GenreTag
          genre={ genre }
          onChange={
            ({ target: { value } }) => { this.setState({ title: value }); }
          }
        />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.setStateMethod }
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
