import React from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label
        htmlFor="genre-input"
        id="genre-input"
        name="genre"
        data-testid="genre-input-label"
        value={ value }
        onChange={ handleChange }
      >
        Gênero
        <select id="genre-input" name="genre" data-testid="genre-input">
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

AddMovieGenre.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieGenre;
