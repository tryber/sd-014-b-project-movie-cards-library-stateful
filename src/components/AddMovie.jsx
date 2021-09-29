import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryLine from './InputStoryLine';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

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

  handleClick = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  resetState = (state) => {
    const { onClick } = this.props;
    onClick(state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  };

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleClick } />
        <InputSubtitle value={ subtitle } onChange={ this.handleClick } />
        <InputImage value={ imagePath } onChange={ this.handleClick } />
        <InputStoryLine value={ storyline } onChange={ this.handleClick } />
        <InputRating value={ rating } onChange={ this.handleClick } />
        <InputGenre value={ genre } onChange={ this.handleClick } />
        <button
          type="reset"
          data-testid="send-button"
          onClick={ () => this.resetState(this.state) }
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
