import React from 'react';
import PropTypes from 'prop-types';

class GenreForm extends React.Component {
  render() {
    const { genre, myFunction } = this.props;
    return (
      <label htmlFor="select" data-testid="genre-input-label">
        Gênero
        <select data-testid="genre-input" value={ genre } onChange={ myFunction }>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreForm.propTypes = {
  genre: PropTypes.string.isRequired,
  myFunction: PropTypes.func.isRequired,
};

export default GenreForm;
