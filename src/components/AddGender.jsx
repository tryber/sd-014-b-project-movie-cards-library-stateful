import React from 'react';
import PropTypes from 'prop-types';

export default class AddGender extends React.Component {
  render() {
    const { dfValue, onChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre"
          data-testid="genre-input"
          value={ dfValue }
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

AddGender.propTypes = {
  dfValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
