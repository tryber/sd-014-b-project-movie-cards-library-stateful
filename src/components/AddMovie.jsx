import React from 'react';
import PropTypes from 'prop-types';
import InputTexts from './InputTexts';
import InputRating from './InputRating';
import InputSelect from './InputSelect';
import TextArea from './TextArea';

// Ajuda do Pessiane na mentoria Técnica
// Ajuda da Beatriz e Bel
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <fieldset className="add-movie-form-fieldset">
          <InputTexts
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            onChange={ this.handleChange }
          />
          <TextArea
            storyline={ storyline }
            onChange={ this.handleChange }
          />
          <InputRating
            rating={ rating }
            onChange={ this.handleChange }
          />
          <InputSelect
            genre={ genre }
            onChange={ this.handleChange }
          />
          <button
            className="btn"
            type="submit"
            data-testid="send-button"
            onClick={ this.handleSubmit }
          >
            Adicionar filme
          </button>
        </fieldset>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
