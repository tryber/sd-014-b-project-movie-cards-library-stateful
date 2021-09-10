import React from 'react';
import InputsAll from './InputsAll';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
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
            name="rating"
            id="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
