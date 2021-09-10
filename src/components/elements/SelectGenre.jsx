import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ state }
          data-testid="genre-input"
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

SelectGenre.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default SelectGenre;
