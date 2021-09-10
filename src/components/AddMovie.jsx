import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRating from './InputRating';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputSelect from './InputSelect';
import InputTextArea from './InputTextArea';
import InputImagePath from './InputImagePath';

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
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.changeInput } />
        <InputSubtitle value={ subtitle } onChange={ this.changeInput } />
        <InputImagePath value={ imagePath } onChange={ this.changeInput } />
        <InputTextArea value={ storyline } onChange={ this.changeInput } />
        <InputRating value={ rating } onChange={ this.changeInput } />
        <InputSelect value={ genre } onChange={ this.changeInput } />
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
