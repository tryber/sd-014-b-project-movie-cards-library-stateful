import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsGenre extends Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ onChange }
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

FormsGenre.propTypes = ({
  genre: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;

export default FormsGenre;
