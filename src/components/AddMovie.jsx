import React from 'react';
import PropTypes from 'prop-types';
import AddGenre from './AddGenre';
import AddImage from './AddImage';
import AddRating from './AddRating';
import AddStoryline from './AddStoryline';
import AddSubtitle from './AddSubtitle';
import AddTitle from './AddTitle';

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

  changeAll = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTitle value={ title } onChange={ this.changeAll } />
        <AddSubtitle value={ subtitle } onChange={ this.changeAll } />
        <AddImage value={ imagePath } onChange={ this.changeAll } />
        <AddStoryline value={ storyline } onChange={ this.changeAll } />
        <AddRating value={ rating } onChange={ this.changeAll } />
        <AddGenre value={ genre } onChange={ this.changeAll } />
        <button type="button" data-testid="send-button" onClick={ onClick }>
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
