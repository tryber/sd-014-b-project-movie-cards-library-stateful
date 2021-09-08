// PASSO 6.2
import React from 'react';
import PropTypes from 'prop-types';

export default class Genre extends React.Component {
  render() {
    const { handleInitialValue, value } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          type="text"
          name="genre"
          onChange={ handleInitialValue }
          value={ value }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  handleInitialValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
