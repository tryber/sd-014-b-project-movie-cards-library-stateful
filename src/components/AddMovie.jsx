/* eslint-disable max-lines-per-function */
// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputsTypeText from './InputsTypeText';
import InputTypeTextArea from './InputTypeTextArea';
import InputTypeNumber from './InputTypeNumber';
import SelectGenre from './SelectGenre';

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

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
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
        <InputsTypeText
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleInputChange={ this.handleInputChange }
        />
        <InputTypeTextArea
          storyline={ storyline }
          handleInputChange={ this.handleInputChange }
        />
        <InputTypeNumber
          rating={ rating }
          handleInputChange={ this.handleInputChange }
        />
        <SelectGenre
          genre={ genre }
          handleInputChange={ this.handleInputChange }
        />
        <button
          type="submit"
          data-testid="send-button"
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
