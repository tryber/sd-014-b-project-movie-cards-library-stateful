import React from 'react';
import PropTypes from 'prop-types';
import InputsAll from './InputsAll';
import SelectInput from './SelectInput';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  };

  handleClick = (callback) => {
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <InputsAll
          state={ { title, subtitle, imagePath } }
          handleChange={ this.handleChange }
        />
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            id="storyline"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="number">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
            id="number"
            step="0.1"
          />
        </label>
        <SelectInput handleChange={ this.handleChange } genre={ genre } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.handleClick(onClick) }
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
