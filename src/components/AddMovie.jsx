import React from 'react';
import PropTypes from 'prop-types';
import InputSubtitle from './Inputs/InputSubtitle';
import InputTitle from './Inputs/InputTitle';
import InputImage from './Inputs/InputImage';
import InputRating from './Inputs/InputRating';
import TextAreaStoryline from './Inputs/TextAreaStoryline';
import SelectGenre from './Inputs/SelectGenre';
// import ButtonMovie from './Inputs/ButtonMovie';

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
    this.changeInput = this.changeInput.bind(this);
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

  changeInput({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="search-bar-form" data-testid="search-bar-form">
        <InputTitle value={ title } onChange={ this.changeInput } />
        <br />
        <InputSubtitle value={ subtitle } onChange={ this.changeInput } />
        <br />
        <InputImage value={ imagePath } onChange={ this.changeInput } />
        <br />
        <TextAreaStoryline value={ storyline } onChange={ this.changeInput } />
        <br />
        <InputRating value={ rating } onChange={ this.changeInput } />
        <br />
        <SelectGenre value={ genre } onChange={ this.changeInput } />
        <br />
        <button
          data-testid="send-button"
          type="button"
          onClick={ (this.initialState) }
          className="send-button"
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
