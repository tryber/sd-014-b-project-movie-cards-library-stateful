import React from 'react';
import PropTypes from 'prop-types';
import ButtonAdd from './ButtonAdd';
import InputImage from './InputImage';
import InputRating from './InputRating';
import InputSelect from './InputSelect';
import InputText from './InputText';

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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovieAndReset = (onClick) => {
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
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <InputText onChange={ this.handleChange } value={ title } />
          <label
            htmlFor="Subtítulo"
            data-testid="subtitle-input-label"
          >
            Subtítulo
            <input
              name="subtitle"
              data-testid="subtitle-input"
              type="text"
              onChange={ this.handleChange }
              value={ subtitle }
            />
          </label>
          <InputImage onChange={ this.handleChange } value={ imagePath } />
          <label htmlFor="Sinopse" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              data-testid="storyline-input"
              type="text"
              value={ storyline }
              onChange={ this.handleChange }
            />
          </label>
          <InputRating rating={ rating } onChange={ this.handleChange } />
          <InputSelect genre={ genre } onChange={ this.handleChange } />
          <ButtonAdd onChange={ () => this.addMovieAndReset(onClick) } />
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
