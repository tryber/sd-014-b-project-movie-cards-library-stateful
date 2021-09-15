import React from 'react';
import PropTypes from 'prop-types';

class AddGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Gênero" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

AddGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddGenre;
