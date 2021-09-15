// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TitleInputs from './TitleInputs';
import Select from './Select';

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
    this.clickBtn = this.clickBtn.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  clickBtn() {
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
    const {
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInputs state={ this.state } handleChange={ this.handleChange } />
        <label data-testid="storyline-input-label" htmlFor="Sinopse">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="Avaliação">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
        <Select name="genre" value={ genre } onChange={ this.handleChange } />
        <button data-testid="send-button" type="submit" onClick={ this.clickBtn }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: PropTypes.func,
};

export default AddMovie;
