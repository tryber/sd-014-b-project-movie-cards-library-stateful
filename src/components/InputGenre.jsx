import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGenre extends Component {
  render() {
    const { description, genre, handleChange } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        { description }
        <select
          name="genre"
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputGenre.propTypes = {
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputGenre;
