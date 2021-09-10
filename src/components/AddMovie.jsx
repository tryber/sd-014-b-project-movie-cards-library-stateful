// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieTitle from './NewForm/MovieTitle';
import MovieSubtitle from './NewForm/MovieSubtitle';
import MovieImg from './NewForm/MovieImg';
import TextArea from './NewForm/TextArea';
import MovieRating from './NewForm/MovieRating';
import SelectGenre from './NewForm/SelectGenre';

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
    this.updateInput = this.updateInput.bind(this);
    this.initialState = this.initialState.bind(this);
  }

  initialState() {
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

  updateInput({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <MovieTitle value={ title } onChange={ this.updateInput } />
        <MovieSubtitle value={ subtitle } onChange={ this.updateInput } />
        <MovieImg value={ imagePath } onChange={ this.updateInput } />
        <TextArea value={ storyline } onChange={ this.updateInput } />
        <MovieRating value={ rating } onChange={ this.updateInput } />
        <SelectGenre value={ genre } onChange={ this.updateInput } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.initialState }
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
