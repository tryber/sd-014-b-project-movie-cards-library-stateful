import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImputGenre extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre"
            data-testid="genre-input"
            value={ value }
            onChange={ onChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

ImputGenre.propTypes = {
  value: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};
