import React from 'react';
import PropTypes from 'prop-types';

class AddGenre extends React.Component {
  render() {
    const { genre } = this.props;
    return (
      <label
        htmlFor="genre-input"
        data-testid="genre-input-label"
        value={ genre }
        onChange={ this.handleChange }
      >
        Gênero
        <select id="genre-input" name="genre" data-testid="genre-input">
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

AddGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default AddGenre;
