import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieSup from './AddMovieSup';
import AddMovieInf from './AddMovieInf';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    const resetState = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.setState({ ...resetState });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" className="form-add-movie">
        <AddMovieSup
          handleInputs={ this.handleInputs }
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
        />

        <AddMovieInf
          handleInputs={ this.handleInputs }
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
        />
        <section className="container-btn-add-movie">
          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.handleSubmit }
          >
            Adicionar filme
          </button>
        </section>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
