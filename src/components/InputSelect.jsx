import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  constructor() {
    super();
    this.state = { genre: 'action' };
  }

  render() {
    const { change } = this.props;
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          type="select"
          data-testid="genre-input"
          value={ genre }
          onChange={ change }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  change: PropTypes.func.isRequired,
};

export default InputSelect;