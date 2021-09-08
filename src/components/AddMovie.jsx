import React from 'react';
// import PropTypes from 'prop-types';
import AllInputText from './AllInputText';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.upDateState = this.upDateState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  upDateState({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AllInputText
          func={ this.upDateState }
          subtitle={ subtitle }
          title={ title }
          imagePath={ imagePath }
          storyline={ storyline }
        />
        <label htmlFor="rating-input" data-testid="rating-input-label">
          <h5>Avaliação</h5>
          <input
            value={ rating }
            type="number"
            data-testid="rating-input"
            onChange={ this.upDateState }
            name="rating"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          <h5>Gênero</h5>
          <select
            onChange={ this.upDateState }
            data-testid="genre-input"
            value={ genre }
            name="genre"
          >
            <option value="action" data-testid="select-option"> Ação </option>
            <option value="comedy" data-testid="select-option"> Comédia </option>
            <option value="thriller" data-testid="select-option"> Suspense </option>
          </select>
        </label>
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */

export default AddMovie;
