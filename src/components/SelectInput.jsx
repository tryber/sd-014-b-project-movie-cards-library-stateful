import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { genre, atualiza } = this.props;
    return (
      <label htmlFor="genreInput" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="genreInput"
          value={ genre }
          onChange={ atualiza }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  genre: PropTypes.string.isRequired,
  atualiza: PropTypes.func.isRequired,
};

export default SelectInput;
