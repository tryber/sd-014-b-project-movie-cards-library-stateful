import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsGenre extends Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          type="string"
          value={ genre }
          onChange={ onChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

FormsGenre.propTypes = {
  genre: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default FormsGenre;
