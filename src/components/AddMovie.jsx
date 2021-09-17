import React from 'react';
import PropTypes from 'prop-types';
import ButtonAdd from './ButtonAdd';
import InputImage from './InputImage';
import InputRating from './InputRating';
import InputSelect from './InputSelect';

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

  handleChange =(event) => {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    });
  }

  addMovieAndReset = (onClick) => {
    onClick();
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
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label
            htmlFor="Título"
            data-testid="title-input-label"
          >
            Título
            <input
              data-testid="title-input"
              type="text"
              onChange={ this.handleChange }
              value={ title }
            />
          </label>
          <label
            htmlFor="Subtítulo"
            data-testid="subtitle-input-label"
          >
            Subtítulo
            <input
              data-testid="subtitle-input"
              type="text"
              onChange={ this.handleChange }
              value={ subtitle }
            />
          </label>
          <InputImage
            onChange={ this.handleChange }
            value={ imagePath }
          />
          <label htmlFor="Sinopse" data-testid="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
              type="text"
              value={ storyline }
              onChange={ this.handleChange }
            />
          </label>
          <InputRating rating={ rating } onChange={ this.handleChange } />
          <InputSelect genre={ genre } onChange={ this.handleChange } />
          <ButtonAdd onClick={ () => { onClick(); } } />
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
