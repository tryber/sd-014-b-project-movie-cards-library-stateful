import PropTypes from 'prop-types';
import React from 'react';
import InputText from './InputText';
import SelectForm from './SelectForm';

class AddMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  resetMovie = () => {
    const { onClick } = this.props;
    onClick(this.state);

    console.log(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            name="storyline"
            id="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação:
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            id="rating"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <SelectForm
          genre={ genre }
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.resetMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovies.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovies;
